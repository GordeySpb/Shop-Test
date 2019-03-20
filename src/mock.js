const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const { goods } = require("./shop.json");

const mock = new MockAdapter(axios, { delayResponse: 3000 });

mock.onGet("/goods").reply(200, { items: goods.slice(0, 10), page: 1 });

export default mock;
