const Courses = require('../models/courses');
const { toObject } = require('../util/toObject');

class CoursesController {
  show(req, res) {
    Courses.findOne({ slug: req.params.slug }).then((course) => {
      res.render('../views/courses.hbs', toObject(course));
    });
  }

  edit(req, res, next) {
    Courses.findOne({ _id: req.params.id })
      .then((course) => res.render('edit', toObject(course)))
      .catch((err) => next(err));
  }

  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect(`/courses/${req.params.id}/edit`);
      })
      .catch((err) => next(err));
  }

  delete(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => res.redirect(req.get('referer')))
      .catch((err) => next(err));
  }

  destroy(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('/trash'))
      .catch((err) => next(err));
  }

  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => Courses.updateOne({ _id: req.params.id }, { deleted: false }))
      .then(() => res.redirect('/trash'))
      .catch((err) => next(err));
  }
}

module.exports = new CoursesController();
