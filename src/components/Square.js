import React from 'react';

const Square = ({ value, onClickFunc }) => {
  return (
    <button type="button" className="square" onClick={onClickFunc}>
      {value}
    </button>
  );
};

export default Square;
