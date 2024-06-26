const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter); // /news là con nhỏ nhất
    app.use('/courses', coursesRouter); // /news là con nhỏ nhất
    app.use('/', siteRouter);
    app.use('/me', meRouter);

}

module.exports = route;
