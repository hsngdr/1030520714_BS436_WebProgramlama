const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports={
    entry:'./src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'Public'),
        libraryTarget: "var",
        library: "game"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
                
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer: {
        contentBase: './Public',
        injectClient: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
}