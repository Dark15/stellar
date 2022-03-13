const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mocks/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is now running on port 3001')
})
