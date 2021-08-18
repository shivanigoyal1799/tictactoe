import React from 'react';

const History = ({ history, moveTo, currMove }) => (
  <div className="history-wrapper">
    <ul className="history">
      {history.map((_, move) => (
        <li key={move}>
          <button
            className={`btn-move ${move === currMove ? 'active' : ''}`}
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
  </div>
);

export default History;
