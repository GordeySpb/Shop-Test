import { SET_SALE_FROM, SET_SALE_TO } from '../actions';

const initialState = {};

export default function sale(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SALE_FROM:
      return { ...state, ...payload };

    case SET_SALE_TO:
      return { ...state, ...payload };

    default:
      return state;
  }
}
