import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { filterAndSort,  setSorting } from '../actions';
import Header from '../Components/Header';

const mapStateToProps = ({ goods, sorting }) => ({ goods, sorting });

const mapDispatchToProps = dispatch => (
  bindActionCreators({ filterAndSort, setSorting }, dispatch)
);

const mergeProps = ({goods, sorting}, {filterAndSort, ...dispatchProps}) => {
  return {
    filterAndSort: (sorting, title, {from = '', to = ''} = {}) => filterAndSort({goods, title, from, to, sorting}),
    sorting,
    ...dispatchProps
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);

export default HeaderContainer;