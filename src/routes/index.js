const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('./news', newsRouter); // /news là con nhỏ nhất
    app.use('/',siteRouter)
}

module.exports = route;
