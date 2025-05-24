const Course = require('../models/courses');

class HomeController {
  index(req, res) {
    // res.render('../views/home.hbs');
    Course.find()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    res.send('hello');
  }
}

module.exports = new HomeController();
