import React from 'react';
import PropTypes from 'prop-types';

/**Компонент Error
 * @param {bool} param.bool состояние ошибки
 */

export const Error = ({error}) => (error ? <div>Try again</div> : null);

Error.propTypes = {
  error: PropTypes.bool.isRequired,
};