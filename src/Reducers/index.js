import { combineReducers } from 'redux';

import goods from './goods';
import sortedGoods from './sortedGoods';
import sorting from './sorting';
import error from './error';
import preloader from './preloader';
import filter from './filter';
import sale from './sale';

export default combineReducers({
  goods,
  sortedGoods,
  sorting,
  error,
  preloader,
  filter,
  sale,
});
