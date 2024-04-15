const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); //app sẽ là 1 express
const methodOverride = require('method-override');
const port = 3002;

const SortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

//Cấu hình cho folder public
app.use(express.static(path.join(__dirname, 'public'))); //khi gặp /img/logo.jpg
//Bắt những dữ liệu submit từ form lên thì khi submit lên có body dữ liệu
app.use(
    express.urlencoded({
        extended: true,
    }),
); //Đây là middleware
app.use(express.json()); // đây là middleware dưới dạng json

//Override lại post nếu có patch or put
app.use(methodOverride('_method')); // có thê sử dụng put patch trong form

//Custom Middleware
app.use(SortMiddleware);

//từ khóa use bất cứ get post nào của chúng ta
// app.use(bacBaoVe); //tất cả req vào được nếu không mang theo vé

// //Test Middleware
// function bacBaoVe(req, res, next) {
//     if (['vethuong', 'vevip'].includes(req.query.ve)) {
//         req.face = 'Gạch gạch gạch!!';
//         return next(); //đẩy sang middleware tiếp theo là cái dưới
//     } else {
//         res.status(403).json({ message: 'Access denied' });
//     }
// }

//HTTP logger
//morgan dùng để logger  cho nhìn
app.use(morgan('combined'));
// //Template engine - handlebars là giúp tạo 1 cấu trúc trang
//helpers là giúp tạo function cho cả web
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', //cấu trúc viết tắt handlebars -> hbs
        helpers: require('./helpers/handlebars'),
    }),
); //định nghĩa handlebars/ handlebars.engine thì mới chuyển thành hết lỗi
app.set('view engine', 'hbs'); //set view là handlebars
app.set('views', path.join(__dirname, 'resources', 'views')); // đối số đến thư mục resources/views / path là liên quan đến đường dẫn (_dirname là ở src)

//route này routes
//Routes init
route(app);

//địa  chỉ IP 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}); // lắng nghe cổng 3000
