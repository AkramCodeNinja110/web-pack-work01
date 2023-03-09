const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "output.js"

    },
    //loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // serves static files from the public directory
        },
        compress: true,
        port: 3000,
    },

};