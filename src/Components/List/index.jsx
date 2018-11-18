import React from 'react';
import Good from '../Good';

const List = ({ sortedGoods }) => {

  return(
    <table>
      <tbody>
        {sortedGoods.map((good) => (
          <Good
            key={good.id}
            title={good.data.title}
            url={good.data.base_url}
            price={good.data_price}
            oldPrice={good.data.oldPrice}
          />
        ))
        }
    </tbody>
  </table>
  );
}

export default List;