var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'babel-polyfill',
		'./app/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},

	module: {
		loaders: [
			{test: /\.js$/, include: __dirname+'/app', loader: 'babel-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.svg$/, loader: 'svg-loader' }
		]
	},
	plugins : [HTMLWebpackPluginConfig]
}