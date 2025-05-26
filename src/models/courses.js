const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
  name: String,
  desc: String,
  image: String,
  url: String,
  slug: String,
});

module.exports = mongoose.model('Course', Courses, 'courses');
