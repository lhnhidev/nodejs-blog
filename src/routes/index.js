const searchRouter = require('./search.routes');
const cartRouter = require('./cart.routes');
const homeRouter = require('./home.routes');
const newsRouter = require('./news.routes');

const router = (app) => {
  app.use('/search', searchRouter);

  app.use('/cart', cartRouter);

  app.use('/news', newsRouter);

  app.use('/', homeRouter);
};

module.exports = router;
