# textrazor
> TextRazor SDK for node.js

## Installation

Install using npm:
```sh
$ npm install textrazor --save
```

## Usage

```javascript
const TextRazor = require('textrazor')
const textRazor = new TextRazor('<YOUR API KEY>')
const content = 'The Federal Reserve is the enemy of Ron Paul.'
const options = { extractors: 'entities,topics' }
textRazor.exec(content, options)
  .then(res => console.log(JSON.stringify(res)))
  .catch(err => console.error(err))
```

## Test

Run tests:
```sh
$ npm test
```

Runs in Node.js v4.0+

## License
The MIT License (MIT)

Copyright (c) 2016