const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // needs to be first
                    "css-loader" // needs to be second
                ]
            }
        ]
    }
}
