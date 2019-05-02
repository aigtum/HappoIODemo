const path = require('path');

const {
  RemoteBrowserTarget
} = require('happo.io');

module.exports = {
  apiKey: process.env.REACT_APP_KEY,
  apiSecret: process.env.REACT_APP_SECRET,
  
  type: 'react',
  
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  publicFolders: [
    path.resolve(__dirname, 'src/images'),
  ],

  customizeWebpackConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [{ loader: cssLoader }],
    });
   // it's important that we return the modified config
    return config;
  },
  
};