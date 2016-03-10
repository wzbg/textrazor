# textrazor

TextRazor SDK for node.js

## Install

Install using npm:
```sh
    $ npm install textrazor
```

## Usage

```javascript
const TextRazor = require('textrazor')
const textRazor = new TextRazor('<YOUR API KEY>')
const content = 'The Federal Reserve is the enemy of Ron Paul.'
textRazor.exec(content)
  .then(res => console.log(JSON.stringify(res)))
  .catch(err => console.error(err))
```

## Test

Run tests:
```sh
    $ npm test
```

Tested with node.js v4.0+

## License
The MIT License (MIT)

Copyright (c) 2016