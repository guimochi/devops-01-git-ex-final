var express = require("express");
var app = express();
var path = require("path");
var hbs = require("hbs");

// Creating a date object
const today = new Date();

// Getting full month name (e.g. "June")
const month = today.toLocaleString("default", { month: "long" });

// View Engine Setup
app.set("views", path.join(__dirname));
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("./views/Home", {
    title: "KGB(Y)",
    month: month,
    cards: [
      {
        title: "Our Changing Planet",
        author: "Kurt Wagner",
        desc: "Visit ten places on our planet that are undergoing the biggest changes today",
        imageUrl:
          "https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg",
      },
      {
        title: "Our Changing Planet",
        author: "Kurt Wagner",
        desc: "Visit ten places on our planet that are undergoing the biggest changes today",
        imageUrl:
          "https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg",
      },
      {
        title: "Our Changing Planet",
        author: "Kurt Wagner",
        desc: "Visit ten places on our planet that are undergoing the biggest changes today",
        imageUrl:
          "https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg",
      },
    ],
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
