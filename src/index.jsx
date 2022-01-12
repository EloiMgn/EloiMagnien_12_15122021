import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './reset.css';
import Routing from './Router/Router';
// import fetchMockedData from './utils/utils';

// fetchMockedData();

ReactDOM.render(
  <React.StrictMode >
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
