var hue = require("node-hue-api");

var displayBridges = function(bridge) {
    console.log("Hue Bridges Found: " + JSON.stringify(bridge, null, 2));
};

hue.nupnpSearch().then(displayBridges).done();
