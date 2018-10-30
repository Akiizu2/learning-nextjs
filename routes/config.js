const nextRoutes = require('next-routes')

const routes = nextRoutes()
  .add('home', '/', 'money-planner')
  .add('money-planner', '/money-planner', 'money-planner')
  .add('diaryPayment', '/diary-payment', 'diary-payment')

module.exports = routes