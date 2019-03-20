import React from 'react';
import PropTypes from 'prop-types';

import Good from '../Good';

/** Компонет List
 * @param {array} param.sortedGoods массив товаров
 *
 */

const List = ({ sortedGoods }) => (

  <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Товар</th>
        <th scope="col">Описание</th>
        <th scope="col">Цена</th>
      </tr>
    </thead>
    <tbody>
      {sortedGoods.map(good => (
        <Good
          key={good.id}
          title={good.data.title}
          url={good.data.base_url}
          price={good.data.price}
        />

      ))}
    </tbody>
  </table>

);

List.propTypes = {
  sortedGoods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
