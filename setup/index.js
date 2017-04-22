var fs = require('fs');
var hue = require("node-hue-api");
var getAddress = require('./../src/getAddress');

var username = process.argv[2];
var lightId = process.argv[3];

getAddress()
    .then(host => ({
        "HUE_HOST": host,
        "HUE_USER": username,
        "BEDROOM_LIGHT": lightId
    }))
    .then(config => JSON.stringify(config, null, 2))
    .then(config => fs.writeFileSync('./env.json', config));





