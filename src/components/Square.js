import React from 'react';

const Square = ({ value, onClickFunc, isWinningSquare }) => (
  <button
    type="button"
    className={`square ${isWinningSquare ? 'winning' : ''} ${
      value === 'X' ? 'text-green' : 'text-orange'
    }`}
    onClick={onClickFunc}
  >
    {value}
  </button>
);

export default Square;
