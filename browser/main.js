var update = require('./render.js');

document.querySelector('button').addEventListener('click', function(ev) {
  update({
      fruits: ["apple", "banana", "cherry"],
      name: "Blab"
  });
});
