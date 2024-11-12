import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

const GameBoard = () => {
  const { guesses, word } = useContext(GameContext);

  return (
    <div className='h-full w-full p-4 grid grid-rows-6 gap-2'>
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className='flex justify-center'>
          {guess.split("").map((letter, letterIndex) => {
            let color = "bg-gray-400"; // Default to gray for incorrect letters
            if (letter === word[letterIndex]) {
              color = "bg-green-500"; // Correct position
            } else if (word.includes(letter)) {
              color = "bg-yellow-500"; // Wrong position
            }
            return (
              <div
                key={letterIndex}
                className={`flex items-center justify-center w-12 h-12 text-2xl font-bold text-white ${color} rounded`}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
