import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => { // deleted player param
  const classes = isWinningSquare ? 'square winning-square' : 'square';
  const displayValue = value === null ? '' : value === 0 ? 'O' : 'X';

  return (
    <button className={classes} onClick={onClick}>
      {displayValue}
    </button>
  );
};

export default Square;