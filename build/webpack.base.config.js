const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets',
};

module.exports = {
	externals: {
		paths: PATHS,
	},
	entry: {
		portfolio: PATHS.src,
		view: PATHS.src + '/view.js'
	},
	output: {
		filename: `[name].js`,
		path: PATHS.dist,
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							config: {
								path: 'postcss.config.js',
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: `${PATHS.assets}/img`
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|otf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: `${PATHS.assets}/fonts`
						}
					}
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `[name].css`,
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`,
			filename: './portfolio.html',
			chunks: ['portfolio'],
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/view.html`,
			filename: './view.html',
			chunks: ['view'],
		}),
		new CopyWebpackPlugin([
			{from: `${PATHS.src}/${PATHS.assets}/img`, to: `${PATHS.assets}/img`},
			{from: `${PATHS.src}/static`, to : `${PATHS.dist}/static`},
		]),
	],
};