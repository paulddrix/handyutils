# handyutils
A set of tools to help in development

## Installation
``` npm install handyutils --save ```
## Usage
### Debug
when debbuging simply pass in a string and a object to debug
```javaScript
// app.js
const handyUtils = require('handyutils');

handyUtils.debug('testing',handyUtils );
handyUtils.isEmpty('testing'); // NOT EMPTY, will return false
```
