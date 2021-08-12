import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [initialBoardState, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setNext] = useState(false);
  const handleSquareClick = position => {
    if (initialBoardState[position]) return;
    setBoard(prev => {
      return prev.map((squareValue, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={initialBoardState[position]}
        onClickFunc={() => {
          handleSquareClick(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
