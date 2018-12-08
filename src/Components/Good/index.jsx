import React from 'react';

const Good = ({title, url, price}) => {
  return (
    <tr>
      <td><img src={url} alt="good" className="good-img" /> </td>
      <td><h1 className="good-title">{title}</h1></td>
      <td><span>{price}</span></td>
    </tr>
  );
}

export default Good;