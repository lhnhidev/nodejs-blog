const searchRouter = require('./search.routes');
const cartRouter = require('./cart.routes');
const homeRouter = require('./home.routes');
const newsRouter = require('./news.routes');
const coursesRouter = require('./courses.routes');
const createRouter = require('./create.routes');

const router = (app) => {
  app.use('/search', searchRouter);

  app.use('/cart', cartRouter);

  app.use('/news', newsRouter);

  app.use('/', homeRouter);

  app.use('/courses', coursesRouter);

  app.use('/create', createRouter);
};

module.exports = router;
