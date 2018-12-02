import axios from 'axios';


export const FILTER_AND_SORT = 'FILTER_AND_SORT';
export const SET_SORTING = 'SET_SORTING';
export const SET_NEW_GOODS = 'ADD_GOODS';
export const SET_ERROR_STATE = 'SET_ERROR_STATE';
export const SET_PRELOADER_STATE = 'SET_PRELOADER_STATE';

export const filterAndSort = (payload) => ({ type: FILTER_AND_SORT, payload });
export const setSorting = (payload) => ({ type: SET_SORTING, payload });
export const addGoodsAction = (payload) => ({ type: SET_NEW_GOODS, payload });
export const toggleErrorAction = (payload) => ({ type: SET_ERROR_STATE, payload });
export const togglePreloaderAction = (payload) => ({ type: SET_PRELOADER_STATE, payload });

export const addGoods = () => (dispatch) => {
  dispatch(togglePreloaderAction(true))

  return axios.get('/goods')
    .then(res => res.data.goods)
    .then(goods => {
      if (goods) {
        dispatch(addGoodsAction(goods));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true))
      dispatch(togglePreloaderAction(false))
    })  
};