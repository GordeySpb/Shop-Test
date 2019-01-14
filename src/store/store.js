import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';


import localStorage, { loadState } from '../middleware/local-storage';
import {
  addGoods, setGoods, setSorting, setGoodsFromLS,
} from '../actions';

const stateFromLS = loadState();
const store = createStore(reducer, stateFromLS, applyMiddleware(localStorage(), thunk, logger));


if (stateFromLS) {
  const { sortedGoods, sorting, goods } = stateFromLS;
  store.dispatch(setGoods(goods));
  store.dispatch(setSorting(sorting));
  store.dispatch(setGoodsFromLS(sortedGoods));
} else {
  store.dispatch(addGoods());
}


export default store;
