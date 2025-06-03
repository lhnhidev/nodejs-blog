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

    // try {
    //   const course = await Course.find({});
    //   const count = await Course.countDocumentsWithDeleted({ deleted: true });

    //   res.render('my-courses', {
    //     courses: arrayToObejct(course),
    //     count
    //   });
    // }
    // catch (err) {
    //   next(err);
    // }

    // Course.find({})
    //   .then((course) => {
    //     Course.countDocumentsWithDeleted({ deleted: true })
    //       .then((count) => {
    //         res.render('my-courses', {
    //           courses: arrayToObejct(course),
    //           count
    //         });
    //       })
    //       .catch((err) => next(err))
    //   })
    //   .catch((err) => next(err));
  }

  delete(req, res, next) {
    req.body.idCourses.forEach((id) => {
      Course.delete({ _id: id })
        .then(() => res.redirect('/me/my-courses'))
        .catch((err) => next(err));
    });
  }
}

module.exports = new MeController();
