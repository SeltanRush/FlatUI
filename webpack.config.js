const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
		index: './src/pages/index/index.js',
		profile: './src/pages/profile/profile.js'
	},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        use: 'pug-loader'
			},
			{
				test: /\.css/,
				use: ['style-loader','css-loader']
			},
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
								minimize: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [ autoprefixer({browsers: ['last 2 versions']})]
								}
							}
						},
						'stylus-loader'
					]
				})
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.eot$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        use: "file-loader?name=components/[path][name].[ext]"
      },
      {
        test: /\.js$|\.es6$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
			}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: './src/pages/index/index.pug',
			filename: 'index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/profile/profile.pug',
			filename: 'profile.html',
			chunks: ['profile']
		}),
		new ExtractTextPlugin('[name].css', {allChunks: true}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	optimization: {
    minimizer: [
      new UglifyJsPlugin({ sourceMap: true })
		]
  }
};