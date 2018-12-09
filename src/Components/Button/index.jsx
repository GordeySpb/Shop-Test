import React from 'react';
import PropTypes from 'prop-types';

/**Компонент Button
 *@param {string} param.name имя кнопки
 *@param {Function} param.onClick функция обратного вызова
 */


export const Button = ({ name, onClick }) => <button type="button" className="btn btn-light" onClick={onClick}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {},
};


