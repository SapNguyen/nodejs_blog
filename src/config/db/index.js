const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose
        //     .connect('mongodb://127.0.0.1:27017/f8_education_dev')
        //     .then(() => console.log('Connected successfully!'));
        // console.log('Connected successfully');

        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connected successfully');
    } catch (e) {
        console.log('Connected false');
    }
}

module.exports = { connect };
