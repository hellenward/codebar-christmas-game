import { Board } from './Components/Board/Board'
import { Baubles } from './Components/Baubles/Baubles'
import { SproutBox } from './Components/SproutBox/SproutBox';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
          <h1>Codebar Christmas!</h1>
      </div>
      <div className="AppBoardContainer">
        <Board />
      </div>
      <div className="AppBaublesAndSprouts">
        <div className="AppBaublesContainer">
          <Baubles />
        </div>
        <div className="AppBaublesContainer">
          <SproutBox />
        </div>
      </div>
    </>
  );
}

export default App;
