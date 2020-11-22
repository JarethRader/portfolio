import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route } from 'react-router-dom';
import './style.css';
import history from './utils/history';

ReactDOM.render(
  <Router history={history}>
    <Route path='/:filter?' component={App} />
  </Router>,
  document.getElementById('root')
);
