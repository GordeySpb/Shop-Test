import { combineReducers } from 'redux';

import goods from './goods';
import sortedGoods from './sortedGoods';

export default combineReducers({
  goods,
  sortedGoods,
});