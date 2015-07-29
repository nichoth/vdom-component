var mainLoop = require('main-loop');
var render = require('../view/index.js');

var initState = { fruits: ["apple", "banana"], name: "Steve" };

// set up a loop
var loop = mainLoop(initState, render, {
    create: require("virtual-dom/create-element"),
    diff: require("virtual-dom/diff"),
    patch: require("virtual-dom/patch")
});
document.body.appendChild(loop.target);

// update the loop with the new application state
loop.update({
    fruits: ["apple", "banana", "cherry"],
    name: "Steve"
});
loop.update({
    fruits: ["apple", "banana", "plum"],
    name: "Stevie"
});
