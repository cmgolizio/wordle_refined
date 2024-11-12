import { GameProvider } from "./contexts/GameContext";
import GameBoard from "../src/components/GameBoard";
import Header from "../src/components/Header";
import Keyboard from "../src/components/Keyboard";
import Modal from "../src/components/Modal";
import "./App.css";
import "./index.css";

function App() {
  return (
    <GameProvider>
      {/* <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
        <div className='h-full w-full bg-white shadow-lg rounded-lg p-4'> */}
      <div>
        <div>
          <Header />
          <GameBoard />
          <Keyboard />
          <Modal />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
