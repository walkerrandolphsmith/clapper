var hue = require("node-hue-api");
var getAddress = require('./../src/getAddress');

let ipAddress;
let username = process.argv[2];

getAddress()
    .then(host => ipAddress = host)
    .then(host => new hue.HueApi(host, username))
    .then(api => api.groups())
    .then(groups => console.log(groups));
