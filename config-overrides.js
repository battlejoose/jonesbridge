const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
    addWebpackResolve({
        fallback: {
            "assert": require.resolve("assert"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "fs": false,
        },
    })
);
