class HomeController {
  index(req, res) {
    res.render('../views/home.hbs');
  }
}

module.exports = new HomeController();
