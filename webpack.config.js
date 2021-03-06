const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const development = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web', // что, черт возьми, идиот делает документацию, HMR не будет работать без этого поля
  entry: {
    app: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  output: {
    // publicPath: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@/public': path.resolve(__dirname, 'public'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
    },
    fallback: {
      crypto: false,
    },
    extensions: ['.css', '.less', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public/lib'), to: 'lib' }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
    development && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.m?js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env'], '@babel/preset-react'],
            plugins: [
              [
                'module-resolver',
                {
                  root: ['.'],
                  alias: {
                    '@/public': './public',
                    '@/components': './src/components',
                    '@/pages': './src/pages',
                    '@/styles': './src/styles',
                  },
                },
              ],
              development && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
        // ...other rules
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                // config antd theme here
                modifyVars: {
                  'primary-color': '#2F80ED',
                  'link-color': '#2F80ED',
                  'border-radius-base': '3px',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
        // ...other rules
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
