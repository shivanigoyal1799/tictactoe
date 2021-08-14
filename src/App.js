import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './components/helper';
import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);
  const [currMove, setCurrMove] = useState(0);
  const current = history[currMove];

  const winner = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) return;
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((squareValue, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        initialBoardState={current.board}
        handleSquareClick={handleSquareClick}
      />
      <History history={history} moveTo={moveTo} currMove={currMove} />
    </div>
  );
};
export default App;
