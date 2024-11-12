import React, { useContext } from "react";

import GameContext from "../contexts/GameContext";

const Header = () => {
  const { resetGame } = useContext(GameContext);

  return (
    <header className='flex justify-between items-center p-4 bg-blue-600 text-white'>
      <h1 className='text-3xl font-bold'>Wordle Clone</h1>
      <button
        onClick={resetGame}
        className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white'
      >
        Reset
      </button>
    </header>
  );
};

export default Header;
