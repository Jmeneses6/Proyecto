const jsonServer = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('src/data/data.json');
const middlewares = jsonserver.defaults();
server.use(middlewares);
server.use(jsonServer.rewriter)({
    "/api/*": "/$1",
    "/Usuarios/:recourse/:id/show": "/recourse/:id"
})
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server
