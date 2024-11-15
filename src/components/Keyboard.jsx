import React, { useContext, useEffect, useCallback } from "react";

import GameContext from "../context/GameContext";

const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = () => {
  const {
    handleInput,
    handleGuess,
    handleBackspace,
    currentGuess,
    isGameOver,
  } = useContext(GameContext);

  // Function to handle physical keyboard events
  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;

      if (isGameOver) return; // Stop listening if game is over

      if (key === "Enter") {
        handleGuess();
      } else if (key === "Backspace") {
        handleBackspace();
      } else if (key.length === 1 && /[a-zA-Z]/.test(key)) {
        handleInput(key.toUpperCase());
      }
    },
    [handleBackspace, handleGuess, handleInput, isGameOver]
  );

  // Add event listener for keydown when component mounts, and remove on unmount
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isGameOver]);

  return (
    <div className='h-full w-full flex flex-col items-center justify-center p-4 gap-2'>
      <div className='row-1'>
        {firstRow.map((key) => (
          <button
            key={key}
            onClick={() => handleInput(key)}
            disabled={isGameOver || currentGuess.length >= 5}
            className='mx-1 px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {key}
          </button>
        ))}
      </div>
      <div className='row-2'>
        {secondRow.map((key) => (
          <button
            key={key}
            onClick={() => handleInput(key)}
            disabled={isGameOver || currentGuess.length >= 5}
            className='mx-1 px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {key}
          </button>
        ))}
      </div>
      <div className='row-3'>
        <button
          onClick={handleGuess}
          disabled={isGameOver}
          className='mr-1 px-2 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Enter
        </button>
        {thirdRow.map((key) => (
          <button
            key={key}
            onClick={() => handleInput(key)}
            disabled={isGameOver || currentGuess.length >= 5}
            className='mx-1 px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {key}
          </button>
        ))}
        <button
          onClick={handleBackspace}
          disabled={isGameOver}
          className='ml-1 px-2 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
