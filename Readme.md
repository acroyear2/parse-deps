# parse-deps

parse the ast for require calls.

```js
parsedeps("require('fs');require('path');"); // [fs, path]
```