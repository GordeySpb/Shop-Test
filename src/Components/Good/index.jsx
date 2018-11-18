import React from 'react';

const Good = ({title, url, price, oldPrice}) => {
  return (
    <tr>
      <td><img src={url} alt="good"/> </td>
      <td><h1>{title}</h1></td>
      <td><div>{price}</div></td>
      <td><span>{oldPrice}</span></td>
    </tr>
  );
}

export default Good;