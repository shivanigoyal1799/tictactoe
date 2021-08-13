import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helper';
import './styles/root.scss';

const App = () => {
  const [initialBoardState, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(false);
  const winner = calculateWinner(initialBoardState);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (initialBoardState[position] || winner) return;
    setBoard(prev => {
      return prev.map((squareValue, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board
        initialBoardState={initialBoardState}
        handleSquareClick={handleSquareClick}
      />
    </div>
  );
};
export default App;
