const express = require("express");
const { default: axios } = require("axios");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/", function (req, res) {
  axios({
    url: req.body.url,
    method: req.body.method,
    headers: req.body.headers,
    data: req.body.data,
  })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      if (!error.response) {
        console.error(error);
        return res.status(500).json({ error });
      }

      res.status(error.response.status).json(error.response.data);
    });
});

app.listen(4000);
