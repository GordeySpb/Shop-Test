const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const { goods } = require('./shop.json');


const mock = new MockAdapter(axios, { delayResponse: 3000 });

const items = goods.slice(0, 5);
const goodsForFirstPage = {
  items,
  page: 1,
};

mock.onGet('/goods').reply(200, goodsForFirstPage);

export default mock;
