import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  let [player1Name, setPlayer1Name] = useState(10);
  let [player2Name, setPlayer2Name] = useState(10);

  return (
    <div>
      <div>
      <div>Nazar</div>
      <div>{player1Name}</div>
      <button onClick={() => {
        setPlayer1Name((actual) => actual + 1)
        }}>+</button>
    </div>
    <hr />
    <div>
      <div>Marko</div>
      <div>{player2Name}</div>
      <button onClick={() => {
        setPlayer2Name((actual) => actual + 1)
        }}>+</button>
    </div>
    <hr />
    <button onClick={() => {
      setPlayer1Name((actual) => actual - 1)
      setPlayer2Name((actual) => actual - 1)
      }}>-</button>
      <button onClick={() => {
      setPlayer1Name(10)
      setPlayer2Name(10)
      }}>reset</button>
    </div>
  );
}

export default App;
