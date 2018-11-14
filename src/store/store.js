import { createStore } from 'redux';
import reducer from '../Reducers';

const goods = require('../shop.json');

const store = createStore(reducer, {goods})

export default store;