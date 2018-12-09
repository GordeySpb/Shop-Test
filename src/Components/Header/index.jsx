import React from 'react';
import PropTypes from 'prop-types';

import {SORT_BY_ALPHABET_BEGIN, SORT_BY_ALPHABET_END, SORT_PRICE_BEGIN, SORT_PRICE_END} from '../../sorting';

import { Input }  from '../Input';
import { Button } from '../Button';

/**Компонент Header
 * @param {Function} param.filterAndSort функция фильтрации и сортровки товара
 * @param {Function} param.setSorting функция указывающая как сортировать товар
 * @param {string} param.sorting строка с типом сортировки
 * 
 */

export class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      from: '',
      to: ''
    };
  }


  handlChange = (e, fieldName) => {
    const { filterAndSort } = this.props;
    const value = e.target.value;


    this.setState({[fieldName]: value}, () => {
      const {sorting} = this.props;
      const { title } = this.state;
      let from = +this.state.from;
      let to = +this.state.to;


      filterAndSort(sorting, title.toLowerCase(), {from, to} );
    });
    
  };



  render() {
    const {setSorting} = this.props;

    return (
      <header>
        
        <Input onChange={(e) => this.handlChange(e,'title')} placeholder="Введите название" />
        <div className="sort-input">
          <Input onChange={(e) => this.handlChange(e,'from')} placeholder="От" />
          <Input onChange={(e) => this.handlChange(e,'to')} placeholder="До" />
        </div>

        <div className="btn-controls" >
          <Button name="Цена &#x2191;" onClick={() => {
              setSorting(SORT_PRICE_BEGIN)
            }}
          />
          <Button name="Цена &#x2193;" onClick={() => {
            setSorting(SORT_PRICE_END)
            }}
          />
          <Button name="Алфавит &#x25b2;" onClick={() => {
              setSorting(SORT_BY_ALPHABET_BEGIN)
            }}
          />
          <Button name="Алфавит &#x25bc;" onClick={() => {
              setSorting(SORT_BY_ALPHABET_END)
            }}
          />
        </div>

      </header>
    );
  }

};

Header.propTypes = {
  filterAndSort: PropTypes.func,
  setSorting: PropTypes.func,
  sorting: PropTypes.string.isRequired,

};

Header.defaultprops = {
  filterAndSort: () => {},
  setSorting: () => {},
}

