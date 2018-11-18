import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';

const goods = require('../shop.json');

const store = createStore(reducer, {goods}, applyMiddleware(logger));

export default store;