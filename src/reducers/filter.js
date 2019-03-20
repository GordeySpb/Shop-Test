import { SET_FILTER, SET_FILTER_FROM_LS } from "../actions";

const initialState = "";

export default function filter(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload;

    case SET_FILTER_FROM_LS:
      return payload;

    default:
      return state;
  }
}
