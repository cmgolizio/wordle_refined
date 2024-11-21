import React, { useContext } from "react";

import GameContext from "../context/GameContext";

const Header = () => {
  const { initializeGame } = useContext(GameContext);

  return (
    <div className='w-full h-content absolute top-0 left-0'>
      <header className='flex justify-between items-center p-4 bg-[#5f5f7a] text-[#f8f8ff]'>
        <h1 className='text-3xl font-bold'>Wordle Cont.</h1>
        <button
          onClick={initializeGame}
          className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white'
        >
          Reset
        </button>
      </header>
    </div>
  );
};

export default Header;
