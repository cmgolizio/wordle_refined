import React, { createContext, useState, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(null);

  const fetchWord = async () => {
    // get word from api
    setWord("TRUCK"); // hardcoded example
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const handleGuess = () => {
    if (currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess]);
      if (currentGuess === word) {
        setIsWinner(true);
        setIsGameOver(true);
      }
      if (guesses.length === 5) {
        setIsGameOver(true);
        setIsWinner(false);
      }
      setCurrentGuess("");
    }
  };

  const handleInput = (letter) => {
    if (currentGuess.length < word.length) {
      setCurrentGuess((prev) => prev + letter);
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setIsGameOver(false);
    // Fetch new word
    fetchWord();
  };

  const values = {
    word,
    // setWord,
    guesses,
    // setGuesses,
    currentGuess,
    // setCurrentGuess,
    isGameOver,
    // setIsGameOver,
    isWinner,
    handleGuess,
    handleInput,
    resetGame,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export default GameContext;
