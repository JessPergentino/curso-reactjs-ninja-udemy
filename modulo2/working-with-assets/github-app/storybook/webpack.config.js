const path = require('path')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

const common = require('../webpack/common')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(common.standardPreLoader)

  newConfig.resolve = common.resolve

  return newConfig
}
