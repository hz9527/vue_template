var bodyParser = require('body-parser')
var config = require('../config/mock')

module.exports = function (app) {
  app.use(bodyParser.json())
  require.cache[require.resolve('../config/mock')] = null
  try {
    config = require('../config/mock')
  } catch (err) {
    console.log('reload mockConfig error')
  }
  config.forEach((item) => {
    if (!item.method || typeof item.method === 'string') {
      app[item.method || 'get'](item.path, item.handler)
    } else if (typeof item.method === 'object' && item.method.constructor === Array) {
      item.method.forEach(key => {
        app.route(item.path)[key](item.handler)
      })
    }
  })
  return app
}
