class SearchController {
  
  index(req, res) {
    res.render('../views/cart.hbs');
  }

}

module.exports = new SearchController;