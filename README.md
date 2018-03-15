[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-lib-nodejs/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-lib-nodejs.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-lib-nodejs) 


# IOTA Pico Framework Lib NodeJS

## Introduction

The IOTA Pico Framework Lib NodeJS is a combined library of all the following components:

* [@iota-pico/core](https://github.com/iotaeco/iota-pico-core) - Core functions and helper classes.
* [@iota-pico/data](https://github.com/iotaeco/iota-pico-data) - Data objects.
* [@iota-pico/api](https://github.com/iotaeco/iota-pico-api) - REST API.
* [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto) - Crypto functions Curl/Kerl/SHA3.
* [@iota-pico/business](https://github.com/iotaeco/iota-pico-business) - Business layer to perform transactions.
* [@iota-pico/pal-nodejs](https://github.com/iotaeco/iota-pico-pal-nodejs) - Platform abstraction layer for the NodeJS.
* [@iota-pico/pow-box](https://github.com/iotaeco/iota-pico-pow-box) - Proof of Work using TestNet PowBox. (for TestNet)
* [@iota-pico/pow-js](https://github.com/iotaeco/iota-pico-pow-js) - Proof of Work using JavaScript. (Very Slow - Single Threaded)
* [@iota-pico/pow-nodejs](https://github.com/iotaeco/iota-pico-pow-nodejs) - Proof of Work using CCurl. (Best Choice - Multi-Threaded)
* [@iota-pico/pow-wasm](https://github.com/iotaeco/iota-pico-pow-wasm) - Proof of Work using WebAssembly. (Slow - Single-Threaded)

## Installation

```shell
npm install @iota-pico/lib-nodejs
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

There are two variants of the library

* development - which is not minified and includes source maps in @iota-pico/lib-nodejs/pkg/iota-pico-lib-nodejs.js

* production - which is minified and has no  source maps in @iota-pico/lib-nodejs/pkg/iota-pico-lib-nodejs.min.js

## TypeScript Definitions

TypeScript definitions can be found in the @iota-pico/lib-nodejs/pkg/iota-pico-lib-nodejs.d.ts and should be located automatically by your developments tools.

## Usage

The library is compiled into a CommonJS that can be included directly in the NodeJS. You can see various usage scenarios in the following browser tutorials:

* [Usage Library NodeJS](https://github.com/iotaeco/iota-pico-tutorials/using-library/nodejs/getNodeInfoNodeJS/README.md)

## Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core documentation](https://github.com/iotaeco/iota-pico-core/docs/README.md)
* [@iota-pico/data documentation](https://github.com/iotaeco/iota-pico-data/docs/README.md)
* [@iota-pico/api documentation](https://github.com/iotaeco/iota-pico-api/docs/README.md)
* [@iota-pico/crypto documentation](https://github.com/iotaeco/iota-pico-crypto/docs/README.md)
* [@iota-pico/business documentation](https://github.com/iotaeco/iota-pico-business/docs/README.md)
* [@iota-pico/pal-nodejs documentation](https://github.com/iotaeco/iota-pico-pal-nodejs/docs/README.md)
* [@iota-pico/pow-box documentation](https://github.com/iotaeco/iota-pico-pow-box/docs/README.md)
* [@iota-pico/pow-js documentation](https://github.com/iotaeco/iota-pico-pow-js/docs/README.md)
* [@iota-pico/pow-nodejs documentation](https://github.com/iotaeco/iota-pico-pow-nodejs/docs/README.md)
* [@iota-pico/pow-wasm documentation](https://github.com/iotaeco/iota-pico-pow-wasm/docs/README.md)

## Tutorials

Additional tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

