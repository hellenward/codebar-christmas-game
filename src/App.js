import { Board } from './Components/Board/Board'
import { Baubles } from './Components/Baubles/Baubles'
import { SproutBox } from './Components/SproutBox/SproutBox';

import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  const didPromptRef = useRef(false)

  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()


  useEffect(() => {
    if(didPromptRef.current === false) {
      didPromptRef.current = true
      const enterPlayer1 = window.prompt('Please enter a name for Player 1')
      const enterPlayer2 = window.prompt('Please enter a name for Player 2')
      setPlayer1(enterPlayer1)
      setPlayer2(enterPlayer2)
    }
  }, [])


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
          <Baubles player={player1}/>
        </div>
        <div className="AppBaublesContainer">
          <SproutBox player={player2} />
        </div>
      </div>
    </>
  );
}

export default App;
