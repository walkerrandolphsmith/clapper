var hue = require("node-hue-api");
var getAddress = require('./../src/getAddress');

let ipAddress;
let username = process.argv[2];

getAddress()
    .then(host => ipAddress = host)
    .then(host => new hue.HueApi(host, username))
    .then(api => api.getFullState())
    .then(state => state.lights)
    .then(lights => {
        for(var light in lights) {
            delete lights[light].state;
            console.log(lights[light]);
        }
        
        console.log('-----------------------------');
        
        console.log({
            "HUE_HOST": ipAddress,
            "HUE_USER": username,
            "BEDROOM_LIGHT": "XX:XX:XX:XX:XX:XX:XX:XX-XX"
        })
    });