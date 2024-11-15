import React, { createContext, useState, useEffect } from "react";

import { fetchRandomWord, validateWord } from "../utils/wordApi";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(null);

  useEffect(() => {
    const initializeGame = async () => {
      const newWord = await fetchRandomWord();
      if (newWord) setWord(newWord.toUpperCase());
    };
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
        }, 4500);
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

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setIsGameOver(false);
    setWord("");
  };

  const values = {
    word,
    guesses,
    currentGuess,
    isGameOver,
    isWinner,
    handleGuess,
    handleInput,
    handleBackspace,
    resetGame,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export default GameContext;
