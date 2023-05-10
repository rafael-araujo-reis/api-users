const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controllers/index")(app);

app.listen(port, () => {
  console.info("App listening on port", port);
});
