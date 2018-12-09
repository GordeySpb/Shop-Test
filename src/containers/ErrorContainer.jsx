import { connect } from 'react-redux';

import { Error } from '../Components/Error';

const mapStateToProps = ({ error }) => ({ error });

const ErrorContainer = connect(mapStateToProps)(Error);

export default ErrorContainer;