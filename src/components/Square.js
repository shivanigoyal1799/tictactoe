import React from 'react';

const Square = ({ value, onClickFunc }) => (
  <button type="button" className="square" onClick={onClickFunc}>
    {value}
  </button>
);

export default Square;
