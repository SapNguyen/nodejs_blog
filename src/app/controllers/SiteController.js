const Course = require('../../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    async index(req, res, next) {
        //C1
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (error) {
        //     res.status(500).json({ error: 'Internal server error' });
        // }

        //C2
        // Course.find({})
        //     .then(courses => res.json(courses))
        //     .catch(next);

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
