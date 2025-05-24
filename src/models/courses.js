const mongoose = require('mongoose');
const Courses = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

module.exports = mongoose.model('Course', Courses, 'courses');
