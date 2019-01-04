import { SET_FILTER } from '../actions';

const initialState = '';

export default function filter(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return state;
  }
}
