import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

import localStorage, { loadState } from '../middleware/local-storage';
import { addGoods } from '../actions';



let store;
let goodsFromLs = loadState();

if (goodsFromLs) {
  store = createStore(reducer, goodsFromLs, applyMiddleware(localStorage(), thunk, logger));
} else {
  store = createStore(reducer, {}, applyMiddleware(localStorage(), thunk, logger));
  store.dispatch(addGoods())
}



export default store;