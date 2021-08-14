import React from 'react';

const Square = ({ value, onClickFunc, isWinningSquare }) => (
  <button
    type="button"
    className="square"
    onClick={onClickFunc}
    style={{
      fontWeight: isWinningSquare ? 'bold' : 'normal',
    }}
  >
    {value}
  </button>
);

export default Square;
