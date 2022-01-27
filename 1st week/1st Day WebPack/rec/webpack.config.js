
// here we can config the webpack

const path =  require("path")

module.exports = {

    entry:"./src/index.js",
    output:{

        path: path.join(__dirname, "build"),
        filename: "bundle.js"

    },

    module:{
        rules:[

            {
                test: /\.css$/,
                use:["style-loader", "css-loader"],
            }

        ]

    }

}