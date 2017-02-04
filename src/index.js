var tessel = require('tessel');
var ambient = require('ambient-attx4').use(tessel.port['B']);
var toggleLight = require('./huey');

var triggerVal = 0.22;

ambient.on('ready', () => {
    ambient.setSoundTrigger(triggerVal);
    ambient.on('sound-trigger', toggleLight);
});