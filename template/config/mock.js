var demo = require('../mock/demo')
module.exports = [
  {
    path: '/api/demo',
    method: 'get',
    handler (req, res, next) {
      console.log(3333)
      res.send(JSON.stringify(demo))
    }
  },
  {
    path: '/api/demo2',
    method: ['get', 'post'],
    handler (req, res, next) {
      res.send(JSON.stringify({
        code: 0,
        message: 'success',
        data: null
      }))
    }
  }
]
