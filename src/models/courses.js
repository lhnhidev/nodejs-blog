const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const Courses = new mongoose.Schema({
  name: String,
  desc: String,
  image: String,
  url: String,
  slug: String,
});

Courses.plugin(mongoose_delete, { overrideMethods: true, deletedAt: true });

module.exports = mongoose.model('Course', Courses, 'courses');
