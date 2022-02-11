module.exports = function(app) {
    var user = require('../controllers/user.controller.js')

    app.post('/user', user.create)
    app.get('/users', user.list)
    app.get('/user/:id', user.index)
    app.post('/user/:id', user.update)
}

module.exports = (app) => {
    var energy = require('../controllers/energy.controller.js')

    app.get('/energy')

}