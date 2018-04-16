var hue = require("node-hue-api");

var findBridge = () => hue.nupnpSearch();

var getAddress = () => findBridge()
    .then(bridges => bridges[0])
    .then(bridge => bridge.ipaddress);

module.exports = getAddress;