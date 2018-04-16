var hue = require("node-hue-api");
var getAddress = require('./../common/getAddress');

var api;
var handleSideEffect = (huey) => api = huey;

var getConfig = (username, groupName) => getAddress()
    .then(host => new hue.HueApi(host, username))
    .then(handleSideEffect)
    .then(() => api.groups())
    .then(groups => groups.find(group => group.name === groupName))
    .then((group) => ({
        api: api, group: group,
    }));

module.exports = getConfig;