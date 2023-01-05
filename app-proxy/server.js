const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)


server.listen(PORT, () => {
  console.log('JSON Server is running on: http://localhost:3001')
})
