var tessel = require('tessel');
var ambientLib = require('ambient-attx4');
var ambient = ambientLib.use(tessel.port['A']);
var toggleLight = require('./huey');

var triggerVal = 0.2;

ambient.on('ready', () => {
    ambient.setSoundTrigger(triggerVal);
    ambient.on('sound-trigger', toggleLight);
});

ambient.on('error', function (err) {
  console.log(err)
});
