import axios from 'axios';


export const FILTER_AND_SORT = 'FILTER_AND_SORT';
export const SET_SORTING = 'SET_SORTING';
export const SET_NEW_GOODS = 'ADD_GOODS';
export const SET_ERROR_STATE = 'SET_ERROR_STATE';
export const SET_PRELOADER_STATE = 'SET_PRELOADER_STATE';

export const filterAndSort = (payload) => ({ type: FILTER_AND_SORT, payload });
export const setSorting = (payload) => ({ type: SET_SORTING, payload });
export const setGoods = (payload) => ({ type: SET_NEW_GOODS, payload });
export const toggleError = (payload) => ({ type: SET_ERROR_STATE, payload });
export const togglePreloader = (payload) => ({ type: SET_PRELOADER_STATE, payload });

export const addGoods = () => (dispatch) => {
  dispatch(togglePreloader(true))

  return axios.get('/goods')
    .then(res => res.data.goods)
    .then(goods => {
      if (goods) {
        dispatch(setGoods(goods));
      }
    })
    .then(() => dispatch(togglePreloader(false)))
    .catch(() => {
      dispatch(toggleError(true))
      dispatch(togglePreloader(false))
    })  
};