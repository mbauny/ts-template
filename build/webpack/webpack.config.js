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

module.exports = function(env) {
	let complementConfig = {}
	switch (env.mode) {
		default:
			break
		case 'production':
			complementConfig = require('./webpack.prod.js')
			break
		case 'development':
			complementConfig = require('./webpack.dev.js')
			break
	}

	return merge(commonConfig, complementConfig)
}
