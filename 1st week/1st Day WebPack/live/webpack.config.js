const path = require("path");


module.exports = {

    entry:"./src/index.js",
    output: {

        path: path.resolve(__dirname, "build"),
        filename: "bundel.js",

    },
    mode:"production",
    module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

}   