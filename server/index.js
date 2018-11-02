const express = require('express')
const next = require('next')
const routes = require('../routes')

const production = process.env.ENV === 'PRD"'
const app = next({ dev: !production })

app.prepare()
  .then(() => {
    const server = express()
    server.use(routes.getRequestHandler(
      app,
      async ({ req, res, route, query }) => {
        try {
          const html = await app.renderToHTML(req, res, route.page, query)
          res.send(html)
        } catch (error) {
          res.sendStatus(400).end()
          app.renderError(error, req, res, route.path, query)
          return
        }
      }
    ))

    server.listen(3000, () => {
      console.log(`Web: AKI is Running on Port 3000`)
    })
  })