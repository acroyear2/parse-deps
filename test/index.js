
var assert = require('assert');
var parsedeps = require('..');
var deps = parsedeps("require('fs');require('path');");
assert.deepEqual(deps, ['fs', 'path']);
