var hue = require("node-hue-api");

var toggleLight = (huey, id, handleError) => {
    var state = hue.lightState.create();

    var toggle = (newState) => huey
        .setLightState(id, state[newState]())
        .done();

    huey.lightStatus(id)
        .then(status => !status.state.on)
        .then(newState => newState ? 'on' : 'off')
        .then(newState => toggle(newState))
        .catch(handleError)
};

module.exports = toggleLight;