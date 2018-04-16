var fs = require('fs');
var hue = require("node-hue-api");
var getAddress = require('./../src/getAddress');

var username = process.argv[2];

getAddress()
    .then(host => ({
        "HUE_HOST": host,
        "HUE_USER": username,
        "GROUP_NAME": 'CLAPPER'
    }))
    .then(config => JSON.stringify(config, null, 2))
    .then(config => fs.writeFileSync('./env.json', config));





