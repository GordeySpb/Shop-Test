import { connect } from 'react-redux';

import List from '../Components/List';

const mapStateToProps = ({ sortedGoods }) => ({ sortedGoods });

const ListContayner = connect(mapStateToProps)(List)

export default ListContayner;