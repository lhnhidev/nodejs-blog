const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const router = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

db.connect();

const app = express();

const port = 3000;

// Cách dùng static file
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// morgan: dùng để console.log ra tín hiệu từ client gửi đến server
app.use(morgan('combined'));
app.use(methodOverride('_method'));

// tạo view engine (express-handlebars)
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      createId: (idName, extName) => idName + extName,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', './src/views');

router(app);

app.listen(port, () => {
  console.log(`Examplesss123 app listening on port ${port}`);
});
