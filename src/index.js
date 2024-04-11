const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); //app sẽ là 1 express
const port = 3002;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); //khi gặp /img/logo.jpg

app.use(
    express.urlencoded({
        extended: true,
    }),
); //Đây là middleware
app.use(express.json()); // đây là middleware dưới dạng json

//HTTP logger
//morgan dùng để logger  cho nhìn
app.use(morgan('combined'));
// //Template engine - handlebars là giúp tạo 1 cấu trúc trang
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', //cấu trúc viết tắt handlebars -> hbs
    }),
); //định nghĩa handlebars/ handlebars.engine thì mới chuyển thành hết lỗi
app.set('view engine', 'hbs'); //set view là handlebars
app.set('views', path.join(__dirname, 'resources/views')); // đối số đến thư mục resources/views / path là liên quan đến đường dẫn (_dirname là ở src)

//route này routes
//Routes init
route(app);

//địa  chỉ IP 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); // lắng nghe cổng 3000
