class NewsController {

  index(req, res) {
    res.render('../views/news.hbs');
  }

}

module.exports = new NewsController; 