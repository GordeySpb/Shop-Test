import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  filterAndSort, setSorting, setFilter, setSaleFrom, setSaleTo,
} from '../actions';
import Header from '../Components/Header';

const mapStateToProps = ({
  sorting, sale, goods, sortedGoods,
}) => ({
  sorting, sale, goods: goods.items, sortedGoods: sortedGoods.items,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    filterAndSort, setSorting, setFilter, setSaleFrom, setSaleTo,
  }, dispatch)
);

const mergeProps = ({ goods, sorting, ...state }, { filterAndSort, ...dispatchProps }) => ({
  filterAndSort: (sorting, title, { from = '', to = '' } = {}) => filterAndSort({
    goods, title, from, to, sorting,
  }),
  sorting,
  ...state,
  ...dispatchProps,
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);

export default HeaderContainer;
