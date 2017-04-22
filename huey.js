var hue = require("node-hue-api");
var map = require('lodash.map');
var getConfig = require('./getConfig');
var toggleLight = require('./toggleLight');
var config = require('./env.json');

var api = new hue.HueApi(config.HUE_HOST, config.HUE_USER);
var lightId;

var handleConfigSideEffects = (config) => { api = config.api; lightId = config.lightId };

var i = 0;
var handleError = (error) => i++ < 5 ? retry() : '';

var connectedToggleLight = () => toggleLight(api, lightId, handleError); 

var retry = () => getConfig(config.HUE_USER, config.BEDROOM_LIGHT)
    .then(handleConfigSideEffects)
    .then(connectedToggleLight);

module.exports = connectedToggleLight;