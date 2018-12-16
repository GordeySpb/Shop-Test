import React from 'react';
import PropTypes from 'prop-types';

/** Компонент Input
 * @param {Function} param.onChange функция фильтрации/сортировки
 * @param {string} param.placeholder значение placeholder для инпута
 */

const Input = ({ onChange, placeholder }) => <input className="form-control" onChange={onChange} type="text" placeholder={placeholder} />;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
