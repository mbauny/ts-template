const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const commonConfig = {
	entry: path.resolve(__dirname, '../../sources/index.ts'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './../../dist')
	},
	plugins: [new webpack.ProgressPlugin()]
}

module.exports = function(env = { mode: 'prod' }) {
	switch (env.mode) {
		default:
		case 'prod':
			const prodConfig = require('./webpack.prod.js')
			return merge(commonConfig, prodConfig)
		case 'dev':
			const devConfig = require('./webpack.dev.js')
			return merge(commonConfig, devConfig)
	}
}
