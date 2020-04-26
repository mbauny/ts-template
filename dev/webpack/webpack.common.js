/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const rootDir = path.resolve(__dirname, '../../')

const commonConfig = {
	entry: path.join(rootDir, 'sources/index.ts'),
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
		path: path.join(rootDir, 'dist')
	},
	plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()]
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = async function (env = { mode: 'prod' }) {
	switch (env.mode) {
		default:
		case 'prod': {
			const prodConfig = require('./webpack.prod.js')
			return merge(commonConfig, prodConfig)
		}
		case 'dev': {
			const devConfig = require('./webpack.dev.js')
			return merge(commonConfig, devConfig)
		}
	}
}
