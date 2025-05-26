const Course = require('../models/courses');
const { arrayToObejct } = require('../util/toObject');

class HomeController {
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render('home', { courses: arrayToObejct(courses) });
      })
      .catch((err) => console.log(next(err)));
  }
}

module.exports = new HomeController();
