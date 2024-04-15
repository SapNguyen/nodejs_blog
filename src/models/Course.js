const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.plugin(slug);

const CourseSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, default: '', required: true },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '', maxLength: 255 },
        videoId: { type: String, default: '', required: true },
        level: { type: String, default: '', maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

//Custom query helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({ [req.query.column]: isValidtype ? req.query.type : 'desc' }); //điều kiện sắp xếp column=name và type = giá trị mình muốn truyền vào
    }
    return this;
};

//Add plugin

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true }); //Thêm xóa mềm vào Course

module.exports = mongoose.model('Course', CourseSchema);
