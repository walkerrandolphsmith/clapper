var toggleLight = function() {
    var config = require('./env.json');
    var hue = require("node-hue-api");
    var HueApi = hue.HueApi;
    var lightState = hue.lightState;

    var BEDROOM_LIGHT = config.BEDROOM_LIGHT;
    var api = new HueApi(config.HUE_HOST, config.HUE_USER);
    var state = lightState.create();

    var toggle = (newState) => api
        .setLightState(BEDROOM_LIGHT, state[newState]())
        .done();

    api.lightStatus(BEDROOM_LIGHT)
        .then(status => !status.state.on)
        .then(newState => newState ? 'on' : 'off')
        .then(newState => toggle(newState))
        .done();
};

module.exports = toggleLight;

