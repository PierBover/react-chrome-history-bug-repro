const path = require('path');

const PRODUCTION = process.env.PRODUCTION === 'true';

module.exports = {
	mode: PRODUCTION ? 'production' : 'development',
	devtool: 'eval-cheap-source-map',
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	devServer: {
		publicPath: "/",
		contentBase: "./public",
		historyApiFallback: {
			index: 'index.html'
		}
	}
};