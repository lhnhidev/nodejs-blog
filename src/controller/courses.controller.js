const Courses = require('../models/courses');
const { toObject } = require('../util/toObject');

class CoursesController {
  show(req, res) {
    Courses.findOne({ slug: req.params.slug }).then((course) => {
      console.log(course);
      res.render('../views/courses.hbs', toObject(course));
    });

    // res.render('courses', res.params.slug);
  }
}

module.exports = new CoursesController();
