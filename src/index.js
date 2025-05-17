const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.listen(port, () =>
  console.log(`Examplesss123 app listening on port ${port}`)
);
