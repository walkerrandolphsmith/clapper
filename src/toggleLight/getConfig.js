var hue = require("node-hue-api");
var map = require('lodash.map');
var getAddress = require('./../common/getAddress');

var api;
var handleSideEffect = (huey) => api = huey;

var getLightId = (lights, uid) => {
    var keyToFind = 0;
    map(lights, (value, key) => {
        if(value.uniqueid === uid) {
            keyToFind = key;
        }
    });
    return keyToFind;
};

var getConfig = (username, uid) => getAddress()
    .then(host => new hue.HueApi(host, username))
    .then(handleSideEffect)
    .then(api => api.getFullState())
    .then(state => state.lights)
    .then(lights => getLightId(lights, uid))
    .then(lightId => ({ api, lightId }));

module.exports = getConfig;
