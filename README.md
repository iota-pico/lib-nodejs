[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/https://github.com/iota-pico/iota-pico-lib-nodejs/master/LICENSE) [![Build Status](https://travis-ci.org/https://github.com/iota-pico/iota-pico-lib-nodejs.svg?branch=master)](https://travis-ci.org/https://github.com/iota-pico/iota-pico-lib-nodejs) [![NSP Status](https://nodesecurity.io/orgs/https://github.com/iota-pico/projects/84e40c48-cc49-4f21-a835-b74a6dc58f0a/badge)](https://nodesecurity.io/orgs/https://github.com/iota-pico/projects/84e40c48-cc49-4f21-a835-b74a6dc58f0a)


# IOTA Pico Framework Lib for NodeJS

The IOTA Pico Framework library is an alternative to the official [iota.lib.js](https://github.com/iotaledger/iota.lib.js)

The library is a bundle of all the following components:
* [@iota-pico/core](https://github.com/iota-pico/iota-pico-core) - Core functions and helper classes.
* [@iota-pico/data](https://github.com/iota-pico/iota-pico-data) - Data objects.
* [@iota-pico/api](https://github.com/iota-pico/iota-pico-api) - REST API.
* [@iota-pico/crypto](https://github.com/iota-pico/iota-pico-crypto) - Crypto functions Curl/Kerl/SHA3.
* [@iota-pico/business](https://github.com/iota-pico/iota-pico-business) - Business layer to perform transactions.
* [@iota-pico/pal-nodejs](https://github.com/iota-pico/iota-pico-pal-nodejs) - Platform abstraction layer for the NodeJS.
* [@iota-pico/pow-box](https://github.com/iota-pico/iota-pico-pow-box) - Proof of Work using TestNet PowBox. (for TestNet)
* [@iota-pico/pow-js](https://github.com/iota-pico/iota-pico-pow-js) - Proof of Work using JavaScript. (Very Slow - Single Threaded)
* [@iota-pico/pow-nodejs](https://github.com/iota-pico/iota-pico-pow-nodejs) - Proof of Work using CCurl. (Best Choice - Multi-Threaded)
* [@iota-pico/pow-wasm](https://github.com/iota-pico/iota-pico-pow-wasm) - Proof of Work using WebAssembly. (Slow - Single-Threaded)

If you want to run in the browser try the alternate version [@iota-pico/lib-browser](https://github.com/iota-pico/iota-pico-lib-browser)

# Installation

```shell
npm install @iota-pico/lib-nodejs --save
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

There are two variants of the library

* development - which is not minified and includes source maps in [pkg/iota-pico-lib-nodejs.js](./pkg/iota-pico-lib-nodejs.js)
* production - which is minified and has no  source maps in [pkg/iota-pico-lib-nodejs.min.js](./pkg/iota-pico-lib-nodejs.min.js)

If you don't want all of the proof of work algorithms, there are some alternative smaller packages:

* [pkg/iota-pico-lib-nodejs-none.js](./pkg/iota-pico-lib-nodejs-none.js) - No Proof Of Work algorithms
* [pkg/iota-pico-lib-nodejs-none.min.js](./pkg/iota-pico-lib-nodejs-none.min.js) - No Proof Of Work algorithms
* [pkg/iota-pico-lib-nodejs-ccurl.js](./pkg/iota-pico-lib-nodejs-ccurl.js) - Fastest for Platform
* [pkg/iota-pico-lib-nodejs-ccurl.min.js](./pkg/iota-pico-lib-nodejs-ccurl.min.js) - Fastest for Platform

# TypeScript Definitions

TypeScript definitions can be found in the [pkg/iota-pico-lib-nodejs.d.ts](./pkg/iota-pico-lib-nodejs.d.ts) and should be located automatically by your developments tools.

# Usage

The library is compiled into a CommonJS that can be included directly in the NodeJS. You can see various usage scenarios in the following browser tutorials:

* [Usage Library NodeJS](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/nodejs/getNodeInfoNodeJS/README.md)

# Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core](https://github.com/iota-pico/iota-pico-core/blob/master/docs/README.md)
* [@iota-pico/data](https://github.com/iota-pico/iota-pico-data/blob/master/docs/README.md)
* [@iota-pico/api](https://github.com/iota-pico/iota-pico-api/blob/master/docs/README.md)
* [@iota-pico/crypto](https://github.com/iota-pico/iota-pico-crypto/blob/master/docs/README.md)
* [@iota-pico/business](https://github.com/iota-pico/iota-pico-business/blob/master/docs/README.md)
* [@iota-pico/pal-nodejs](https://github.com/iota-pico/iota-pico-pal-nodejs/blob/master/docs/README.md)
* [@iota-pico/pow-box](https://github.com/iota-pico/iota-pico-pow-box/blob/master/docs/README.md)
* [@iota-pico/pow-js](https://github.com/iota-pico/iota-pico-pow-js/blob/master/docs/README.md)
* [@iota-pico/pow-nodejs](https://github.com/iota-pico/iota-pico-pow-nodejs/blob/master/docs/README.md)
* [@iota-pico/pow-wasm](https://github.com/iota-pico/iota-pico-pow-wasm/blob/master/docs/README.md)

# Tutorials

Tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iota-pico/iota-pico-tutorials)

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
