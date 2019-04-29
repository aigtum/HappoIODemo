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

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  publicFolders: [
    path.resolve(__dirname, 'src/images'),
  ],
  
};