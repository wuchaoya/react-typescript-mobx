const {successRes, errorRes} = require('../utils/mock.ts');
const {delay} = require('roadhog-api-doc');

const proxy = {
  'POST /pub/user/login': {
    result: "r+1mlCZtoMMlZ2UKmWNo6I2VlqVQxtCplDjiEqUXXsV9N7xY4oaFiJ/sE66I54nA5XpyOJ2r5Mx8QkGH2+PC+9sSiiQGAoqj/9rjPLo2kwPZvKmirriitljdZ7SWNzgb"
  },
  'GET /pub/user/user_info': {
    text: '测试数据'
  },
  
};
module.exports = delay(proxy, 1000)