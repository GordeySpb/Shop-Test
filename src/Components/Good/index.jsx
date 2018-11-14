import React from 'react';

const Good = ({title, price, url, oldPrice}) => {
  return (
    <table>
      <tr>
        <td><h1>{title}</h1></td>
        <td><img src={url} alt="good"/> </td>
        <td><span>{price}</span></td>
        <td><span>{oldPrice}</span></td>
      </tr>
    </table>
  );
}

export default Good;