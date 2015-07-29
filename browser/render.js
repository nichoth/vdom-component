var mainLoop = require('main-loop');
var render = require('../view/index.js');

var initState = { fruits: ["apple", "banana"], name: "Steve" };

// set up a loop
var loop = mainLoop(initState, render, {
    create: require("virtual-dom/create-element"),
    diff: require("virtual-dom/diff"),
    patch: require("virtual-dom/patch")
});

document.getElementById('content').appendChild(loop.target);

module.exports = loop.update;
