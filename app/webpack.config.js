
module.exports = {
    entry: ["./main_1.js"],
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
