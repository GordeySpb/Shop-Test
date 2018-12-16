import React from 'react';
import PropTypes from 'prop-types';

/** Компонент Good
 * @param {string} param.title название товара
 * @param {string} param.url ссылка на картинку
 * @param {number} param.price цена товара
 */

const Good = ({ title, url, price }) => (
  <tr>
    <td>
      <img src={url} alt="good" className="good-img" />
    </td>
    <td><h1 className="good-title">{title}</h1></td>
    <td><span>{price}</span></td>
  </tr>
);

Good.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Good;
