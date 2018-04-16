var hue = require("node-hue-api");

var toggleLight = (huey, id) => {
    var state = hue.lightState.create();

    var toggle = (newState) => huey
        .setLightState(id, state[newState]())
        .done();

    return huey.lightStatus(id)
        .then(status => !status.state.on)
        .then(newState => newState ? 'on' : 'off')
        .then(newState => toggle(newState))
};

module.exports = toggleLight;