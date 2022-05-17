import camelCase from 'lodash/camelCase';

const requireModule = require.context(
  '.', false, /\.js$/,
);

const modules = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js' || fileName === './dummy.js') {
    return;
  }

  const moduleCofig = requireModule(fileName);
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = moduleCofig.default || moduleCofig;
});

export default modules;
