var express = require('express');
var app = express();
var cors = require('cors')

var messages = [{text: "some text", owner: "TOM"}, {text: "another message", owner: "JANE"}];

app.use(cors());

var api = express.Router();
app.get("/messages", function (req, res) {
  res.json(messages);
});

app.use("/api", api);
app.listen(1234);
