const Courses = require('../models/courses');
const { arrayToObejct } = require('../util/toObject');

class TrashController {
  show(req, res, next) {
    Courses.findDeleted()
      .then((course) => {
        res.render('trash', { course: arrayToObejct(course) });
      })
      .catch((err) => next(err));
  }
}

module.exports = new TrashController();
