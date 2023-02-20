import React from 'react';
import Square from './Square';

console.log('Testing if Board is rendering.');

const win = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

const checkForWinner = (gameState) => {
  // get array of box id's
  // can't be a winner in less than 5 turns
  if (gameState.length < 5) return 'No Winner Yet';

  let p0 = gameState.filter((item) => item.player === 0).map((item) => item.id);
  let px = gameState.filter((item) => item.player === 1).map((item) => item.id);

  if (p0.length && px.length) {
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }

  const playerOWins = win0.length > 0;
  const playerXWins = winX.length > 0;

  if (playerOWins) {
    return 'Player O';
  } else if (playerXWins) {
    return 'Player X';
  }
  return 'No Winner Yet';
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [gameState, setGameState] = React.useState(Array(9).fill(null));

  const winner = checkForWinner(gameState);
  let status;
  if (winner !== 'No Winner Yet') {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${player === 0 ? 'O' : 'X'}`;
  }

  const handleClick = (i) => {
    if (winner !== 'No Winner Yet' || gameState[i]) {
      return;
    }
    const squares = [...gameState];
    squares[i] = player === 0 ? 'O' : 'X';
    setGameState(squares);
    setPlayer((player + 1) % 2);
  };

  const renderSquare = (i) => (
    <Square
      value={gameState[i]}
      onClick={() => handleClick(i)}
      isWinningSquare={winner !== 'No Winner Yet' && win.some((row) => row.every((i) => gameState[i] === gameState[row[0]]))}
    />
  );

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
    </div>
  );
};

export default Board;