import React from 'react';
import Good from '../Good';

const List = ({ goods }) => {
  const goodsArr =  goods.goods;
  console.log(goodsArr)

  return(
    <ul>
    {goodsArr.map(good => (
        <Good
          key={good.id}
          title={good.data.title}
          url={good.data.base_url}
          price={good.data_price}
          oldPrice={good.data.oldPrice}
        />
    ))
    }
  </ul>
  );
}

export default List;