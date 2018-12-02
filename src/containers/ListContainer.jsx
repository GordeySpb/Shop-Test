import { connect } from 'react-redux';

import List from '../Components/List';

const mapStateToProps = ({sortedGoods, error, preloader}) => ({sortedGoods, error, preloader});

const ListContayner = connect(mapStateToProps)(List)

export default ListContayner;

