const express = require("express");
const hbs = require("hbs");
const app = express();
const portezuelo = 8080;

app.set("view engine", "hbs");
//servir contenido est[atico ]
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Carlos Janon",
    titulo: " hbs con node ",
  });
});

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.get("/generic", function (req, res) {
  res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/elements.html");
});
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(portezuelo, () => {
  console.log(`Example app listening on port ${portezuelo}`);
});
