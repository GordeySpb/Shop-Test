const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const { goods } = require('./shop.json');


const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet('/goods').reply(200, {goods});

export default mock;