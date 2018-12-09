import React from 'react';
import PropTypes from 'prop-types';

/**Компонент Preloader
 * @param {bool} param.preloader состояние прелоадера
 */

export const Preloader = ({preloader}) => (preloader ? <div>Loading....</div> : null);

Preloader.propTypes = {
  preloader: PropTypes.bool.isRequired,
}