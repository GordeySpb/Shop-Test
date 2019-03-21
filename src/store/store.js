import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers";

import localStorage, { loadState } from "../middleware/local-storage";
import {
  addGoods,
  setGoods,
  setSorting,
  setGoodsFromLS,
  setFilterFromLS,
  setSaleFromLS,
  setSaleToLS
} from "../actions";

const stateFromLS = loadState();
const store = createStore(
  reducer,
  {},
  applyMiddleware(localStorage(), thunk, logger)
);

if (stateFromLS) {
  const { sortedGoods, sorting, goods, filter, sale } = stateFromLS;
  store.dispatch(setGoods(goods));
  store.dispatch(setSorting(sorting));
  store.dispatch(setGoodsFromLS(sortedGoods));
  store.dispatch(setFilterFromLS(filter));
  store.dispatch(setSaleFromLS(sale));
  store.dispatch(setSaleToLS(sale));
} else {
  store.dispatch(addGoods());
}

export default store;
