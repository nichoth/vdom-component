var h = require("virtual-dom/h");

module.exports = function render(state) {
    return h("div", [
        h("div", [
            h("span", "hello "),
            h("span.name", state.name)
        ]),
        h("ul", state.fruits.map(renderFruit))
    ]);

    function renderFruit(fruitName) {
        var f = h("li", [
            h('fruit-elmt', {attributes: {name: fruitName}})
        ]);
        return f;
    }
};
