import { SET_NEW_GOODS } from '../actions';

const initialState = [];

const goods = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_GOODS:
      return payload;


    default:
      return state;
  }
};

export default goods;
