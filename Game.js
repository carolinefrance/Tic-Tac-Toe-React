// Game.js works when I don't import Board and replace Board in the div with text. The problem is with Board.js
import React from 'react';
import Board from './Board';
/* TEST success: import Square from './Square';*/

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        Board component will go here, once I have found the bug.
      </div>
    </div>
  );
};

export default Game;