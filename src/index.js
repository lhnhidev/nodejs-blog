import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

const app = express();
const port = 3000;

app.use(morgan("combined"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
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
