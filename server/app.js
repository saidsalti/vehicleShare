var api = require('./API Routers/index');

var apiRouter = (function(app) {
    app.use('/api/', api.users);

});

module.exports = apiRouter;