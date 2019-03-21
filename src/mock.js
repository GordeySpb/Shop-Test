const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const { goods } = require("./shop.json");

const mock = new MockAdapter(axios, { delayResponse: 1500 });

const page1 = goods.filter((item, index) => index >= 0 && index <= 9);
const page2 = goods.filter((item, index) => index >= 10 && index <= 20);
const page3 = goods.filter((item, index) => index >= 20 && index <= 30);
const page4 = goods.filter((item, index) => index >= 30 && index <= 40);
const page5 = goods.filter((item, index) => index >= 40 && index <= 50);

mock.onGet("/goods").reply(200, { items: page1, page: 1 });
mock.onGet("/next/2").reply(200, { items: page2, page: 2 });
mock.onGet("/next/3").reply(200, { items: page3, page: 3 });
mock.onGet("/next/4").reply(200, { items: page4, page: 4 });
mock.onGet("/next/5").reply(200, { items: page5, page: 5 });

export default mock;
