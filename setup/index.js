var hue = require("node-hue-api");
var config = require('./../env.json');
var getAddress = require('./../getAddress');

getAddress()
    .then(host => new hue.HueApi(config.HUE_HOST, config.HUE_USER))
    .then(api => api.getFullState())
    .then(things => {
        console.log(things.lights)
    });