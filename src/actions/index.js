// export const SET_FILTERED_GOODS = 'SET_FILTERED_GOODS';
export const START_END = 'START_END';
export const END_START = 'END_START';
export const SORT_TITLE = 'SORT_TITLE';


// export const filterGoods = payload => ({ type: SET_FILTERED_GOODS, payload });
// export const sortedStartEnd = payload => ({ type: START_END, payload });

export const sortedByAlfStart = () => {
  return { type: START_END };
};

export const sortedByAlfEnd = () => {
  return { type: END_START };
}

export const sortedByTitle = (payload) => ({ type: SORT_TITLE, payload });