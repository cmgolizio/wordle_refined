// components/Board.js
import React, { useContext, useEffect, useRef } from "react";
import GameContext from "../context/GameContext";
import { gsap } from "gsap";
import { NUMBER_OF_GUESSES, WORD_LENGTH } from "../constants";

const Board = () => {
  const { guesses, currentGuess, word } = useContext(GameContext);
  const boxRefs = useRef([]); // Array to store refs for each letter box

  // Determine the color for each letter based on guess accuracy
  const getBoxColor = (letter, letterIndex, guess) => {
    if (!word.includes(letter)) return "gray"; // Gray for letters not in the word
    if (letter === word[letterIndex]) return "green"; // Green for correct position
    return "yellow"; // Yellow for correct letter, wrong position
  };

  // Animate the colors on guess submission using GSAP
  useEffect(() => {
    if (guesses.length === 0) return; // Only animate if there are completed guesses

    const currentGuessIndex = guesses.length - 1; // Index of the latest guess
    const currentGuess = guesses[currentGuessIndex];

    // Create a GSAP timeline for sequential animations
    const tl = gsap.timeline();

    // Loop through each letter in the current guess and animate with delay
    currentGuess.split("").forEach((letter, letterIndex) => {
      const color = getBoxColor(letter, letterIndex, currentGuess);

      // Target the specific box and apply a color transition in sequence
      tl.to(
        boxRefs.current[currentGuessIndex * WORD_LENGTH + letterIndex],
        {
          backgroundColor: color, // Apply color
          duration: 0.3, // Animation duration for each box
        },
        letterIndex * 0.3 // Delay for each box in the sequence
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guesses]);

  return (
    <div className='p-4 grid grid-rows-6 gap-2'>
      {Array.from({ length: NUMBER_OF_GUESSES }).map((_, rowIndex) => {
        const guess = guesses[rowIndex] || ""; // Use a guess if available, otherwise an empty string

        return (
          <div key={rowIndex} className='flex justify-center gap-2'>
            {Array.from({ length: WORD_LENGTH }).map((_, letterIndex) => {
              const letter =
                rowIndex === guesses.length
                  ? currentGuess[letterIndex] || "" // Show current input in the current row
                  : guess[letterIndex] || ""; // Show existing guesses or empty squares

              return (
                <div
                  key={letterIndex}
                  ref={(el) =>
                    (boxRefs.current[rowIndex * WORD_LENGTH + letterIndex] = el)
                  } // Store ref
                  className='flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-2xl font-bold rounded bg-white'
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;