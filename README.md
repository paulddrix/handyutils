# handyutils
A set of tools to help in development

## Installation
``` npm install handyutils --save ```
## Usage
### Debug
when debugging simply pass in a string and a object to debug
```javaScript
// app.js
const handyUtils = require('handyutils');

handyUtils.debug('testing',handyUtils );
handyUtils.isEmpty('testing'); // NOT EMPTY, will return false
```

### isEmpty
when checking if something is empty, simply pass in any data type to check
```javaScript
// app.js
const handyUtils = require('handyutils');

handyUtils.isEmpty('testing'); // NOT EMPTY, will return false
handyUtils.isEmpty(''); // EMPTY, will return true
```
