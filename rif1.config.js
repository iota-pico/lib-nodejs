module.exports = {
    from: [
        /@iota-pico\/(.*)\/dist\//g
    ],
    to: [
        "../$1/"
    ],
    files: [
        "src/*/*.ts"
    ]
};