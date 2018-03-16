[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-lib-nodejs/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-lib-nodejs.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-lib-nodejs) 


# IOTA Pico Framework Lib for NodeJS

The IOTA Pico Framework library is an alternative to the official [iota.lib.js](https://github.com/iotaledger/iota.lib.js)

The library is a bundle of all the following components:
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

If you want to run in the browser try the alternate version [@iota-pico/lib-browser](https://github.com/iotaeco/iota-pico-lib-browser)

# Installation

```shell
npm install @iota-pico/lib-nodejs --save
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

There are two variants of the library

* development - which is not minified and includes source maps in [pkg/iota-pico-lib-nodejs.js](./pkg/iota-pico-lib-nodejs.js)

* production - which is minified and has no  source maps in [pkg/iota-pico-lib-nodejs.min.js](./pkg/iota-pico-lib-nodejs.min.js)

# TypeScript Definitions

TypeScript definitions can be found in the [pkg/iota-pico-lib-nodejs.d.ts](./pkg/iota-pico-lib-nodejs.d.ts) and should be located automatically by your developments tools.

# Usage

The library is compiled into a CommonJS that can be included directly in the NodeJS. You can see various usage scenarios in the following browser tutorials:

* [Usage Library NodeJS](https://github.com/iotaeco/iota-pico-tutorials/using-library/nodejs/getNodeInfoNodeJS/README.md)

# Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core](https://github.com/iotaeco/iota-pico-core/docs/README.md)
* [@iota-pico/data](https://github.com/iotaeco/iota-pico-data/docs/README.md)
* [@iota-pico/api](https://github.com/iotaeco/iota-pico-api/docs/README.md)
* [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto/docs/README.md)
* [@iota-pico/business](https://github.com/iotaeco/iota-pico-business/docs/README.md)
* [@iota-pico/pal-nodejs](https://github.com/iotaeco/iota-pico-pal-nodejs/docs/README.md)
* [@iota-pico/pow-box](https://github.com/iotaeco/iota-pico-pow-box/docs/README.md)
* [@iota-pico/pow-js](https://github.com/iotaeco/iota-pico-pow-js/docs/README.md)
* [@iota-pico/pow-nodejs](https://github.com/iotaeco/iota-pico-pow-nodejs/docs/README.md)
* [@iota-pico/pow-wasm](https://github.com/iotaeco/iota-pico-pow-wasm/docs/README.md)

# Tutorials

Tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discordapp.com/invite/fNGZXvh) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# Donations

IOTA donations are always welcome :smile:
```shell
QWJXX99QDEYWUWXEGA9QXSNOWOKHMFKCMSZTXDFLRZAFQRPQTHQDXSZWQQTAHNDNRYHMIKJYWQLKTFHBWSAOJDHAMB
```

# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
