// components/Modal.js
import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";

const Modal = () => {
  const { isGameOver, isWinner, word, resetGame } = useContext(GameContext);

  if (!isGameOver) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded shadow-lg text-center'>
        {!isWinner ? (
          <>
            <h2 className='text-2xl font-bold mb-4'>Game Over!</h2>
            <p className='mb-6'>
              The word was: <span className='font-bold'>{word}</span>
            </p>
            <button
              onClick={resetGame}
              className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white'
            >
              Play Again
            </button>
          </>
        ) : (
          <>
            <h2 className='text-2xl font-bold mb-4'>YOU WIN!</h2>
            <button
              onClick={resetGame}
              className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white'
            >
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
