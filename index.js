
module.exports = parsedeps;

var acorn = require('acorn');
var walk = require('acorn/util/walk');

function parsedeps (src, callback) {
  var ast = acorn.parse(src);
  var deps = [];
  walk.simple(ast, {
    CallExpression: function (node) {
      if (node.callee.type === 'Identifier' && 
          node.callee.name === 'require') {
        if (typeof callback === 'function') fn(node);
        deps.push(node.arguments[0].value);
      }
    }
  });
  return deps;
}
