const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(webpackBaseConfig, {
    mode: 'production',
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})