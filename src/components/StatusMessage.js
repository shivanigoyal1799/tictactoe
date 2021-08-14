import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(elem => elem !== null);

  return (
    <h2>
      {/* conditional rendering */}
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMoveLeft && `Draw !!`}
    </h2>
  );
};

export default StatusMessage;
