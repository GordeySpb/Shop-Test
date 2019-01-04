import React from 'react';
import PropTypes from 'prop-types';

import {
  SORT_BY_ALPHABET_BEGIN, SORT_BY_ALPHABET_END, SORT_PRICE_BEGIN, SORT_PRICE_END,
} from '../../sorting';

import Input from '../Input';
import Button from '../Button';

/** Компонент Header
 * @param {Function} param.filterAndSort функция фильтрации и сортровки товара
 * @param {Function} param.setSorting функция указывающая как сортировать товар
 * @param {string} param.sorting строка с типом сортировки
 *
 */

class Header extends React.Component {
  constructor(props) {
    super(props);


    this.handleFilter = this.handleFilter.bind(this);
    this.handleSaleFrom = this.handleSaleFrom.bind(this);
    this.handleSaleTo = this.handleSaleTo.bind(this);
  }


  handleFilter(e) {
    const { value } = e.target;
    const { setFilter, filterAndSort } = this.props;

    setFilter(value);
    filterAndSort('', value);
  }

  handleSaleFrom(e) {
    const from = e.target.value;
    const {
      setSaleFrom, filterAndSort, sorting,
    } = this.props;

    setSaleFrom({ from: +from });
    filterAndSort(sorting, '', { from });
  }

  handleSaleTo(e) {
    const to = e.target.value;
    const {
      setSaleTo, filterAndSort, sorting, sale,
    } = this.props;
    const { from } = sale;

    setSaleTo({ to: +to });
    filterAndSort(sorting, '', { from, to });
  }

  render() {
    const { setSorting } = this.props;

    return (
      <header>
        <Input onChange={this.handleFilter} placeholder="Введите название" />
        <div className="sort-input">
          <Input onChange={this.handleSaleFrom} placeholder="От" />
          <Input onChange={this.handleSaleTo} placeholder="До" />
        </div>

        <div className="btn-controls">
          <Button
            name="Цена &#x2191;"
            onClick={() => {
              setSorting(SORT_PRICE_BEGIN);
            }}
          />
          <Button
            name="Цена &#x2193;"
            onClick={() => {
              setSorting(SORT_PRICE_END);
            }}
          />
          <Button
            name="Алфавит &#x25b2;"
            onClick={() => {
              setSorting(SORT_BY_ALPHABET_BEGIN);
            }}
          />
          <Button
            name="Алфавит &#x25bc;"
            onClick={() => {
              setSorting(SORT_BY_ALPHABET_END);
            }}
          />
        </div>

      </header>
    );
  }
}

Header.propTypes = {
  filterAndSort: PropTypes.func.isRequired,
  setSorting: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  sale: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  setSaleFrom: PropTypes.func.isRequired,
  setSaleTo: PropTypes.func.isRequired,
};


export default Header;
