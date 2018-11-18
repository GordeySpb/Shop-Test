import { START_END, END_START, SORT_TITLE } from '../actions';

const goods = require('../shop.json');
const goodsArr = goods.goods;

const sortedGoods = (state = goodsArr, { type, payload }) => {
  switch (type) {

    case SORT_TITLE:
      return state.map(good => good.data.title.includes(payload));
    
    case START_END:
      const newArr = state.sort((a, b) => a.data.title.localeCompare(b.data.title));
      return [...newArr];

    case END_START:
    const newArray = state.sort((a, b) => b.data.title.localeCompare(a.data.title));
    return [...newArray];  

    default:
      return state;
  }
};

export default sortedGoods;