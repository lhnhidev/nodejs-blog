const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const router = require("./routes");

const app = express();

const port = 3000;

// Cách dùng static file
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));

// morgan: dùng để console.log ra tín hiệu từ client gửi đến server
app.use(morgan("combined"));

// đăng ký middle ware (express-handlebars)
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

router(app);

app.listen(port, () => {
  console.log(`Examplesss123 app listening on port ${port}`);
});
