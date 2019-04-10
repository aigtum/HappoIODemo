const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.KEY,
  apiSecret: process.env.SECRET,

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  type: 'react',
};