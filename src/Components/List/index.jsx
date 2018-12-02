import React from 'react';

import Good from '../Good';
import Error from '../Error';
import Preloader from '../Preloader';

const List = ({ sortedGoods, error, preloader }) => {
  console.log(preloader)
  return(
    <>
      <Error error={error} />
      <Preloader preloader={preloader} />
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
    </>
  );
}

export default List;