const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

router.render = (req, res) => {
    const response = res.locals.data;
    const userID = req.query.userID;
    if (userID) {
       res.jsonp(response[userID]);
    } 
    else{
      res.jsonp(response);
    }
  }

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/users/:userID/': '/users?userID=:userID',
}))
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running.')
})