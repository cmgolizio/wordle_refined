import { GameProvider } from "./context/GameContext";
import Board from "../src/components/Board";
import Header from "../src/components/Header";
import Keyboard from "../src/components/Keyboard";
import Modal from "../src/components/Modal";
import "./App.css";
import "./index.css";

function App() {
  return (
    <GameProvider>
      <div>
        <div>
          <Header />
          <Board />
          <Keyboard />
          <Modal />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
