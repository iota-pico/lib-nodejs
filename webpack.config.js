const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const pkgFolder = path.join(__dirname, './pkg');
const bootstrapFile = path.join(pkgFolder, 'bootstrap.js');

const isProd = process.env.NODE_ENV === 'production';
const outputLibName = process.env.LIB_VER === 'all' ? "" : `-${process.env.LIB_VER}`; 

let isDir = false;
try {
    isDir = fs.lstatSync(pkgFolder).isDirectory();
} catch (err) { }
if (!isDir) {
    fs.mkdirSync(pkgFolder);
}
fs.writeFileSync(bootstrapFile, `exports.default = require("../dist/index-${process.env.LIB_VER}");`);

const plugins = [];
if (isProd) {
    plugins.push(new UglifyJsPlugin());
}

module.exports = {
    entry: bootstrapFile,
    output: {
        path: pkgFolder,
        filename: "iota-pico-lib-nodejs" + outputLibName + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
        library: {
            root: "IotaPico",
            amd: "@iota-pico/lib-nodejs",
            commonjs: "@iota-pico/lib-nodejs"
        },
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: "node",
    externals: {
        "ffi": "ffi",
        "big-integer": {
            "amd": "big-integer",
            "commonjs": "big-integer",
            "commonjs2": "big-integer",
            "root": "bigInt"
        }
    },
    mode: isProd ? "production": "development",
    devtool: isProd ? undefined : "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env"
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "helpers": false,
                                    "regenerator": true
                                }
                            ],
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    "globals": ["Error"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    plugins
};
