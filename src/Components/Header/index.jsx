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

  handlChange = (e) => {
    const { filterAndSort } = this.props;
    const title = e.target.value;

    this.setState({ title }, () => {
      const {title} = this.state;
      const {sorting} = this.props;
      filterAndSort(sorting, title.toLowerCase())
    });
  }

  render() {
    const {setSorting} = this.props;

    return (
      <>
        <Input  onChange={this.handlChange} />
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
