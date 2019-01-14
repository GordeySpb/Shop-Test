import React from 'react';

const Pagination = ({ page, onClick }) => (
  <ul className="pagination">
    <li className="pagination__item">
      <a href="#">&#60;</a>
    </li>
    <li className="pagination__item">
      <a href="#">{page}</a>
    </li>
    <li className="pagination__item" onClick={onClick}>
      <a href="#">&#62;</a>
    </li>
  </ul>
);

export default Pagination;
