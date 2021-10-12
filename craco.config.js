const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgba(255,0,99,1)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};