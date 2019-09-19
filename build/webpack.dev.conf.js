const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    devServer: {
        port: 8081,
        contentBase: webpackBaseConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
