
var assert = require('assert');
var parsedeps = require('..');
var deps = parsedeps("require('fs');require('path');");
assert.deepEqual(deps, ['fs', 'path']);
function fn0 (node) {
  node.arguments[0].value += 'x';
}
deps = parsedeps("require('fs');require('path');", fn0);
assert.deepEqual(deps, ['fsx', 'pathx']);