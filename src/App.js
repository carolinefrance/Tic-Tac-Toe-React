import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'
import Game from './Game.js';

console.log('Testing if App is rendering.');

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ color: "#000", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
        <Card className="mb-3" style={{ color: "#000", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
          <Card.Body>
            <Card.Title style={{ fontSize: "28px" }}>React Tic-Tac-Toe</Card.Title>
            <Card.Text>Click on a square below to play.</Card.Text>
            <Button variant="secondary">Reset Game</Button>
          </Card.Body>
        </Card>
      </header>
      <body>
        <div id="root">
          <Game />
        </div>
      </body>
    </div>
  );
}

export default App;
