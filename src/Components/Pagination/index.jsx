import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, onNext, onPrev }) => (
  <ul className="pagination">
    {page !== 1
      ? (
        <li className="pagination__item" onClick={() => onPrev(page - 1)}>
          <a href="#">&#60;</a>
        </li>
      )
      : null
    }
    <li className="pagination__item">
      <a href="#">{page}</a>
    </li>
    {page !== 5
      ? (
        <li className="pagination__item" onClick={() => onNext(page + 1)}>
          <a href="#">&#62;</a>
        </li>
      )
      : null
    }
  </ul>
);


Pagination.propTypes = {
  page: PropTypes.number,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  page: 1,
};

export default Pagination;
