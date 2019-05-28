const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 8200,
		historyApiFallback: true
	},
	devtool: 'inline-source-map',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: [/.css$|.scss$/],
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	}
};
