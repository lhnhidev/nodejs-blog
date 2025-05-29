const Course = require('../models/courses');
const { arrayToObejct } = require('../util/toObject');

class MeController {
  show(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render('my-courses', { courses: arrayToObejct(course) });
      })
      .catch((err) => next(err));
  }
}

module.exports = new MeController();
