const path = require('path');

module.exports = {
	mode: 'development',
	entry: ['core-js/stable', './src/_js/defaults.js'],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				options: {
					cache: true
				},
				enforce: 'pre',
				exclude: [
					/node_modules/,
					/lib/
				]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		filename: 'defaults.js',
		path: path.resolve(__dirname, 'public/js')
	},
	stats: 'normal'
};
