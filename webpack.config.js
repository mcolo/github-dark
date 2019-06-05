const path = require('path');

const SOURCE_PATH = path.join(__dirname, '..');
const POPUP_PATH = path.join(SOURCE_PATH, './src/popup');
const INJECTED_PATH = path.join(SOURCE_PATH, './src/injected');

module.exports = {
  entry: {
    'popup': './src/popup/index.ts',
    'injected': './src/injected/index.ts',
    'styles': './src/styles/main.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/dist/js')
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: POPUP_PATH,
        loader: 'ts-loader',
        options: {
            instance: 'popup',
            configFile: 'tsconfig.json',
        }
      },
      {
        test: /\.tsx$/,
        include: INJECTED_PATH,
        loader: 'ts-loader',
        options: {
            instance: 'injected',
            configFile: 'tsconfig.json',
        }
      },
      {
        test: /\.scss$/,
        exclude: [INJECTED_PATH, POPUP_PATH],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../css/[name].css',
            }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader?-url' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  mode: 'production'
};