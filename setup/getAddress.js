var getAddress = require('./../src/getAddress');

getAddress().then(address => console.log('IP Address: ', address));