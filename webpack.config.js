var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: '/src/images',
            to: 'images'
        }]),
    ],

}