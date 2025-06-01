const Course = require('../models/courses');
const { arrayToObejct } = require('../util/toObject');

class MeController {
  async show(req, res, next) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([course, count]) =>
        res.render('my-courses', { courses: arrayToObejct(course), count }),
      )
      .catch((err) => next(err));
  }
}

module.exports = new MeController();
