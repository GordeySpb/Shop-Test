import React from 'react';

import {SORT_BY_ALPHABET_BEGIN, SORT_BY_ALPHABET_END, SORT_PRICE_BEGIN, SORT_PRICE_END} from '../../sorting';

import Input from '../Input';
import Button from '../Button';

class Header extends React.Component {
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
      let { title, from, to } = this.state;

      from = +from;
      to = +to;

      filterAndSort(sorting, title.toLowerCase(), {from, to} );
    });
    
  };



  render() {
    const {setSorting} = this.props;

    return (
      <>
        <Input onChange={(e) => this.handlChange(e,'title')} placeholder="Введите название" />
        <Input onChange={(e) => this.handlChange(e,'from')} placeholder="От" />
        <Input onChange={(e) => this.handlChange(e,'to')} placeholder="До" />
        <Button name="А-Я" onClick={() => {
            setSorting(SORT_BY_ALPHABET_BEGIN)
          }}
        />
        <Button name="Я-А" onClick={() => {
            setSorting(SORT_BY_ALPHABET_END)
          }}
        />
        <Button name="Цена по возростанию" onClick={() => {
            setSorting(SORT_PRICE_BEGIN)
          }}
        />
        <Button name="Цена по убыванию" onClick={() => {
          setSorting(SORT_PRICE_END)
          }}
        />
      </>
    );
  }

};


export default Header;
