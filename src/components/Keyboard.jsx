import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = () => {
  const { handleInput, handleGuess, currentGuess, isGameOver } =
    useContext(GameContext);
  return (
    <div className='h-full w-full flex flex-col items-center justify-center p-4'>
      <div className='row-1'>
        {firstRow.map((key) => (
          <button
            key={key}
            onClick={() => handleInput(key)}
            disabled={isGameOver || currentGuess.length >= 5}
            className='px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
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
            className='px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {key}
          </button>
        ))}
      </div>
      <div className='row-3'>
        {thirdRow.map((key) => (
          <button
            key={key}
            onClick={() => handleInput(key)}
            disabled={isGameOver || currentGuess.length >= 5}
            className='px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {key}
          </button>
        ))}
      </div>
      <button
        onClick={handleGuess}
        disabled={isGameOver}
        className='col-span-2 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Enter
      </button>
    </div>
  );
};

export default Keyboard;
