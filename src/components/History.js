import React from 'react';

const History = ({ history, moveTo, currMove }) => (
  <ul>
    {history.map((_, move) => (
      <li key={move}>
        <button
          style={{
            fontWeight: move === currMove ? 'bold' : 'normal',
          }}
          type="button"
          onClick={() => {
            moveTo(move);
          }}
        >
          {move === 0 ? `GO TO START !` : `GO TO MOVE #${move}`}
        </button>
      </li>
    ))}
  </ul>
);

export default History;
