var bodyParser = require('body-parser')
var config = require('../config/mock')

module.exports = function (app) {
  app.use(bodyParser.json())
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
