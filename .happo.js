var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');


const {
  RemoteBrowserTarget
} = require('happo.io');

module.exports = {
  apiKey: process.env.REACT_APP_KEY,
  apiSecret: process.env.REACT_APP_SECRET,

  publicFolders: [
    path.resolve(__dirname, 'src/images'),
  ],

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/images',
      to: 'images'
    }]),
  ],

  type: 'react',
};