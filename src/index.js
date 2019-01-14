import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mock';

import store from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
