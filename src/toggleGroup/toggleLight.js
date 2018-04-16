var hue = require("node-hue-api");

var toggleLight = (huey, group) => {
    var state = hue.lightState.create();

    var newState = group.state.any_on ? 'off' : 'on';

    return huey
        .setGroupLightState(
            group.id,
            state[newState](),
        )
        .done();
};

module.exports = toggleLight;