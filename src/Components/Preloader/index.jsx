import React from 'react';

const Preloader = ({ preloder }) => {
  console.log(preloder);
  return preloder ? <div>Loading...</div> : null
};

export default Preloader;