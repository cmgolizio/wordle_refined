import React, { createContext, useState, useEffect } from "react";

import { fetchRandomWord, validateWord } from "../utils/wordApi";

const GameContext = createContext("");

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("WORD: ", word);
    console.log("LOADING: ", loading);
  }, [word, loading]);

  const initializeGame = async () => {
    setLoading(true); // Start the loading indicator
    try {
      let newWord = null;
      let isValid = false;

      // Keep fetching until a valid word is found
      while (!isValid) {
        newWord = await fetchRandomWord();
        if (newWord) {
          isValid = await validateWord(newWord); // Validate the word
        }
      }

      setWord(newWord.toUpperCase()); // Set the valid word
      setGuesses([]); // Clear previous guesses
      setCurrentGuess("");
      setIsGameOver(false);
      setIsWinner(false);
    } catch (error) {
      console.error("Error initializing game:", error);
    } finally {
      setLoading(false); // Ensure loading is stopped
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Handle backspace to remove the last letter
  const handleBackspace = () => {
    if (currentGuess.length > 0 && !isGameOver) {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
  };

  // Submit the current guess
  const handleGuess = async () => {
    if (currentGuess.length === word.length) {
      const isValid = await validateWord(currentGuess);
      if (!isValid) {
        alert("Not a valid word. Try again.");
        return;
      }

      setGuesses([...guesses, currentGuess]);

      if (currentGuess === word) {
        setTimeout(() => {
          setIsWinner(true);
          setIsGameOver(true);
        }, 600);
      }

      setCurrentGuess("");
    }
  };

  // Handle typing letters into the current guess
  const handleInput = (letter) => {
    if (currentGuess.length < word.length && !isGameOver) {
      setCurrentGuess((prev) => prev + letter);
    }
  };

  const values = {
    word,
    guesses,
    currentGuess,
    isGameOver,
    isWinner,
    loading,
    handleGuess,
    handleInput,
    handleBackspace,
    initializeGame,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export default GameContext;
