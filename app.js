const express = require("express");
const expressInstance = express();

expressInstance.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

expressInstance.listen(3000);

module.exports = expressInstance;
