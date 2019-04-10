const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.REACT_APP_KEY,
  apiSecret: process.env.REACT_APP_SECRET,

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  type: 'react',
};