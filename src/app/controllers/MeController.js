const Course = require('../../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] me/stored/courses
    storeCourses(req, res, next) {
        //Áp dụng Promise vì muốn gọi 2 cái phương thức ra
        Promise.all([Course.find({}).sortable(req), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => {
                res.render('./me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Gộp 2 cái dưới vừa in ra danh sách các store vừa in ra số lượng bản ghi đã xóa ghép vào 1 promise thôi

        // Course.countDocumentsWithDeleted({ deleted: true })
        //     .then((deletedCount) => {})
        //     .catch(next);

        // Course.find({})
        //     .then((courses) =>
        //         res.render('./me/stored-courses', {
        //             courses: multipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }

    //[GET] me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render('./me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
