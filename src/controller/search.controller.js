class SearchController {
  index(req, res) {
    res.render('../views/search.hbs');
  }
}

module.exports = new SearchController();
