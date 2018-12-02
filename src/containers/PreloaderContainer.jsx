import { connect } from 'react-redux';

import Preloader from '../Components/Preloader';

const mapStateToProps = ({ preloader }) => ({ preloader });

const PreloaderContainer = connect(mapStateToProps)(Preloader);

export default PreloaderContainer;