/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Board />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);