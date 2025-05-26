const Courses = require('../models/courses');
const crypto = require('crypto');

class CreateController {
  index(req, res) {
    res.render('../views/create.hbs');
  }

  async create(req, res) {
    try {
      await Courses.create({
        ...req.body,
        slug: crypto.randomUUID(),
      });
      res.redirect('/create');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Lỗi khi tạo khóa học');
    }
  }
}

module.exports = new CreateController();
