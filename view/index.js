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
        return h("li", [
            h("span", fruitName)
        ]);
    }
};
