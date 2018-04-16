var hue = require("node-hue-api");
var map = require('lodash.map');
var getConfig = require('./getConfig');
var toggleLight = require('./toggleLight');
var config = require('./../../env.json');

var i = 0;

var reset = () => i = 0;
var hasExceededThreshold = () => i++ > 5;

const handleException = (error) => {
    if(hasExceededThreshold()) {
        // TODO: write to logs
        console.log(error);
        reset();
    } else {
        handleClap()
    }
};

var handleClap = () => getConfig(config.HUE_USER, config.LIGHT_ID)
    .then((config) => toggleLight(config.api, config.lightId))
    .then(reset)
    .catch(handleException);

module.exports = handleClap;