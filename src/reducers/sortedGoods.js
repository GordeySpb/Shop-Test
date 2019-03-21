import {
  FILTER_AND_SORT,
  SET_SORTING,
  SET_NEW_GOODS,
  SET_GOODS
} from "../actions";
import {
  SORT_BY_ALPHABET_BEGIN,
  SORT_BY_ALPHABET_END,
  SORT_PRICE_BEGIN,
  SORT_PRICE_END
} from "../sorting";

const filterByBoth = ({ from, to }, goods) =>
  goods.filter(good =>
    good.data.price >= from && good.data.price <= to ? good : null
  );
const fiterByFrom = (from, goods) =>
  goods.filter(good => (good.data.price >= from ? good : null));
const fiterByTo = (to, goods) =>
  goods.filter(good => (good.data.price <= to ? good : null));

const filterByPrice = ({ from, to }, state) => {
  if (from && to) {
    return filterByBoth({ from, to }, state);
  }

  if (from && !to) {
    return fiterByFrom(from, state);
  }

  if (!from && to) {
    return fiterByTo(to, state);
  }

  return state;
};

const filterByTitle = (title, goods) =>
  title
    ? goods.filter(good => good.data.title.toLowerCase().includes(title))
    : goods;

const filterByPriceProvider = ({ from, to, goods }) =>
  filterByPrice({ from, to }, goods);
const filterByTitleProvider = ({ title, goods }) => filterByTitle(title, goods);

const filters = [filterByPriceProvider, filterByTitleProvider];

const sort = (sorting, goods) => {
  switch (sorting) {
    case SORT_PRICE_BEGIN:
      return [...goods].sort((a, b) => a.data.price - b.data.price);

    case SORT_PRICE_END:
      return [...goods].sort((a, b) => b.data.price - a.data.price);

    case SORT_BY_ALPHABET_BEGIN:
      return [...goods].sort((a, b) =>
        a.data.title.localeCompare(b.data.title)
      );

    case SORT_BY_ALPHABET_END:
      return [...goods].sort((a, b) =>
        b.data.title.localeCompare(a.data.title)
      );

    default:
      return goods;
  }
};

let filtered;
let sortedGoodsArr;
let sorted;

const initialState = {
  items: [],
  page: 1
};

const sortedGoods = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_AND_SORT:
      filtered = filters.reduce((filteringGoods, filter) => {
        const filteredGoods = filter({ ...payload, goods: filteringGoods });
        return filteredGoods;
      }, payload.goods);

      sortedGoodsArr = sort(payload.sorting, filtered);

      return { items: sortedGoodsArr };

    case SET_NEW_GOODS:
      return { ...payload };

    case SET_GOODS:
      return payload;

    case SET_SORTING:
      sorted = sort(payload, state.items);
      return { items: sorted };

    default:
      return state;
  }
};

export default sortedGoods;
