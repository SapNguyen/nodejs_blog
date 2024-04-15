module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    }; //tạo biến local để truyền sort vào trang sau

    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true;//gán biến này sẽ true
        // res.locals._sort.type = req.query.type;//gán biến này thành type trên param
        // res.locals._sort.column = req.query.column;

        //C2: assign ghi đè vào Object bên trên
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};
