const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bugtrax." });
});
require("./app/routes/project.routes.js")(app);
require("./app/routes/ticket.routes.js")(app);
require("./app/routes/comment.routes.js")(app);
require("./app/routes/team.routes.js")(app);
require("./app/routes/assigned.routes.js")(app);
require("./app/routes/user.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
