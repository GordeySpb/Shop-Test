import {
  SET_SALE_FROM,
  SET_SALE_TO,
  SET_SALE_FROM_LS,
  SET_SALE_TO_LS
} from "../actions";

const initialState = {};

export default function sale(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SALE_FROM:
      return { ...state, ...payload };

    case SET_SALE_TO:
      return { ...state, ...payload };

    case SET_SALE_FROM_LS:
      return { ...state, ...payload };

    case SET_SALE_TO_LS:
      return { ...state, ...payload };

    default:
      return state;
  }
}
