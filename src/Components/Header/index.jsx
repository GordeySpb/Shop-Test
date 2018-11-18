import React from 'react';

import Input from '../Input';
import Button from '../Button';

const Header = ({ sortedByAlfStart, sortedByAlfEnd }) => {
  return (
    <>
      <Input />
      <Button name="А-Я" onClick={sortedByAlfStart} />
      <Button name="Я-А" onClick={sortedByAlfEnd} />
    </>
  );
};

export default Header;
