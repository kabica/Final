import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Discover from './Discover/Discover';

import * as serviceWorker from './serviceWorker';
import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Discover />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
