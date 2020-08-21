const express = require("express");
const app = express();
const { readFile, readFileSync } = require("fs");

app.get("/", (request, response) => {
  readFile("./home.html", "utf8", (err, html) => {
    if (err) {
      response.status(500).send("Sorry, out of order");
    }

    response.send(html);
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log("App available on http://localhost:5000")
);
