
module.exports = parsedeps;

var acorn = require('acorn');
var walk = require('acorn/util/walk');

function parsedeps (src) {
  var ast = acorn.parse(src);
  var deps = [];
  walk.simple(ast, {
    CallExpression: function (node) {
      if (node.callee.type === 'Identifier' && 
          node.callee.name === 'require') {
        deps = deps.concat(node.arguments.map(function (dep) {
          return dep.value;
        }));
      }
    }
  });
  return deps;
}
