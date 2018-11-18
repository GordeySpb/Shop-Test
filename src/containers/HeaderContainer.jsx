import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortedByAlfStart, sortedByAlfEnd, sortedByTitle } from '../actions';
import Header from '../Components/Header';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ sortedByAlfStart, sortedByAlfEnd, sortedByTitle }, dispatch)
);

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;