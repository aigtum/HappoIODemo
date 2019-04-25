const { RemoteBrowserTarget } = require('happo.io');
const path = require('path');

module.exports = {
  apiKey: process.env.REACT_APP_KEY,
  apiSecret: process.env.REACT_APP_SECRET,

  publicFolders: [
    path.resolve(__dirname, 'public'),
  ],

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  type: 'react',
};