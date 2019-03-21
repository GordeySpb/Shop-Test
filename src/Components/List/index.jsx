import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';

import Good from '../Good';

/** Компонет List
 * @param {array} param.sortedGoods массив товаров
 *
 */

const List = ({ items, page, nextGoods, prevGoods }) => (

  <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Товар</th>
        <th scope="col">Описание</th>
        <th scope="col">Цена</th>
      </tr>
    </thead>
    <tbody>
      {items.map(good => (
        <Good
          key={good.id}
          title={good.data.title}
          url={good.data.base_url}
          price={good.data.price}
        />

      ))}
    </tbody>
    <Pagination page={page} onNext={nextGoods} onPrev={prevGoods} />
  </table>

);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
};

List.defaultProps = {
  items: [],
  page: 1,
};

export default List;
