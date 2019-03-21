import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextGoods, prevGoods } from '../actions';

import List from '../Components/List';


const mapStateToProps = ({ sortedGoods: { items, page }, error }) => {
  return ({ items, page, error });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    nextGoods,
    prevGoods,
  }, dispatch)
);


const ListContayner = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContayner;
