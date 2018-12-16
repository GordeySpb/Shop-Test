import { SET_SORTING } from '../actions';

const initialState = '';

const sorting = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORTING:
      return payload;

    default:
      return state;
  }
};

export default sorting;
