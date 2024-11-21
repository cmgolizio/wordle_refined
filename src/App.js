import React, { useContext, useEffect } from "react";

import GameContext from "./context/GameContext";
import Board from "../src/components/Board";
import Header from "../src/components/Header";
import Keyboard from "../src/components/Keyboard";
import Modal from "../src/components/Modal";
import Loading from "./components/Loading";
import "./App.css";
import "./index.css";

function App() {
  const { loading, word } = useContext(GameContext);

  useEffect(() => {
    console.log("WORD [ FROM App.jsx ]: ", word);
    console.log("LOADING [ FROM App.jsx ]: ", loading);
  }, [word, loading]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Board />
          <Keyboard />
          <Modal />
        </>
      )}
    </div>
  );
}

export default App;
