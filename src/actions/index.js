import axios from "axios";

export const FILTER_AND_SORT = "FILTER_AND_SORT";
export const SET_SORTING = "SET_SORTING";
export const SET_NEW_GOODS = "SET_NEW_GOODS";
export const SET_ERROR_STATE = "SET_ERROR_STATE";
export const SET_PRELOADER_STATE = "SET_PRELOADER_STATE";
export const SET_GOODS = "SET_GOODS";
export const SET_FILTER = "SET_FILTER";
export const SET_SALE_FROM = "SET_SALE_FROM";
export const SET_SALE_TO = "SET_SALE_TO";
export const SET_FILTER_FROM_LS = "SET_FILTER_FROM_LS";
export const SET_SALE_FROM_LS = "SET_SALE_FROM_LS";
export const SET_SALE_TO_LS = "SET_SALE_TO_LS";

export const filterAndSort = payload => ({ type: FILTER_AND_SORT, payload });
export const setSorting = payload => ({ type: SET_SORTING, payload });
export const setGoods = payload => ({ type: SET_NEW_GOODS, payload });
export const toggleError = payload => ({ type: SET_ERROR_STATE, payload });
export const togglePreloader = payload => ({
  type: SET_PRELOADER_STATE,
  payload
});
export const setGoodsFromLS = payload => ({ type: SET_GOODS, payload });
export const setFilter = payload => ({ type: SET_FILTER, payload });
export const setSaleFrom = payload => ({ type: SET_SALE_FROM, payload });
export const setSaleTo = payload => ({ type: SET_SALE_TO, payload });
export const setFilterFromLS = payload => ({
  type: SET_FILTER_FROM_LS,
  payload
});
export const setSaleFromLS = payload => ({ type: SET_SALE_FROM_LS, payload });
export const setSaleToLS = payload => ({ type: SET_SALE_FROM_LS, payload });

/** Получает Обьект с товарами от сервера
 * @returns {Object}
 */

export const addGoods = () => dispatch => {
  dispatch(togglePreloader(true));

  return axios
    .get("/goods")
    .then(res => res.data)
    .then(data => {
      if (data) {
        dispatch(setGoods(data));
      }
    })
    .then(() => dispatch(togglePreloader(false)))
    .catch(() => {
      dispatch(toggleError(true));
      dispatch(togglePreloader(false));
    });
};

export const nextGoods = page => dispatch => {
  dispatch(togglePreloader(true));

  return axios
    .get(`/next/${page}`)
    .then(res => res.data)
    .then(data => {
      if (data) {
        dispatch(setGoods(data));
      }
    })
    .then(() => dispatch(togglePreloader(false)))
    .catch(() => {
      dispatch(toggleError(true));
      dispatch(togglePreloader(false));
    });
};

export const prevGoods = page => dispatch => {
  dispatch(togglePreloader(true));
  let url = `/next/${page}`;
  if (page === 1 || page >= 5) {
    url = "/goods";
  }

  return axios
    .get(url)
    .then(res => res.data)
    .then(data => {
      if (data) {
        dispatch(setGoods(data));
      }
    })
    .then(() => dispatch(togglePreloader(false)))
    .catch(() => {
      dispatch(toggleError(true));
      dispatch(togglePreloader(false));
    });
};
