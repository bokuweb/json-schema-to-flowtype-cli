# json-schema-to-flowtype-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/bokuweb/json-schema-to-flowtype-cli.svg)](https://greenkeeper.io/)

json schema to flowtype cli tool.

[![Build Status](https://img.shields.io/travis/bokuweb/json-schema-to-flowtype-cli.svg?style=flat-square)](https://travis-ci.org/bokuweb/json-schema-to-flowtype-cli)
[![Version](https://img.shields.io/npm/v/json-schema-to-flowtype-cli.svg?style=flat-square)](https://www.npmjs.com/package/json-schema-to-flowtype-cli)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contribute](#contribute)
- [License](#license)

## Installation
 
### Requirements

`json-schema-to-flowtype-cli` support Node.js v6+ 
 
``` sh
$ npm i -D json-schema-to-flowtype-cli
```

## Usage

### CLI

``` sh
$ json-schema-to-flowtype-cli /path/to/target-dir -O /path/to/output-dir
```

####  Options

  * `-O`, `--oitputDir` specify output directory.


### script

``` javascript
const generate = require('json-schema-to-flowtype-cli');

generate({
  targetDir: '/path/to/target-dir',
  outputDir: '/path/to/output-dir',
});
```

### TODO

- [x] *.json support
- [x] *.yaml or *.yml support
- [ ] Github repository support for target.


## Test

``` sh
$ npm t 
```

## Contribute

PRs welcome.

## License

The MIT License (MIT)

Copyright (c) 2017 @Bokuweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

