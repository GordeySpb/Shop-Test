import { connect } from 'react-redux';

import List from '../Components/List';

const mapStateToProps = ({ sortedGoods, error }) => ({ sortedGoods, error });

const ListContayner = connect(mapStateToProps)(List);

export default ListContayner;
