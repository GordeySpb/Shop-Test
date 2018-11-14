import { connect } from 'react-redux';

import List from '../Components/List';

const mapStateToProps = ({ goods }) => ({ goods });



const ListContayner = connect(mapStateToProps)(List)

export default ListContayner;