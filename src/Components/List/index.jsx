import React from 'react';

import Good from '../Good';

const List = ({ sortedGoods }) => {
  return(

  <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Товар</th>
        <th scope="col">Описание</th>
        <th scope="col">Цена</th>
      </tr>
    </thead>
    <tbody>
      {sortedGoods.map((good) => (
          <Good
            key={good.id}
            title={good.data.title}
            url={good.data.base_url}
            price={good.data.price}
          />
        ))
      }

    </tbody>
  </table>
    
  );
}

export default List;