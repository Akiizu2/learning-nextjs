const router = require('next-routes')

const routes = router()
  .add('Home', '/', 'index')
  .add('Test', '/test/:id', 'index')

module.exports = routes