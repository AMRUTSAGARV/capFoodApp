const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;
var corsOptions = {
  origin: "http://localhost:8081",
};
// console.log(process.env.MONGO_URI)
db.mongoose
  .connect(``, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/order.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "hotel",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'hotel' to roles collection");
      });
      new Role({
        name: "ngo",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'ngo' to roles collection");
      });
      new Role({
        name: "customer",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'customer' to roles collection");
      });
    }
  });
}

// hotel       ngo       customer
// user      moderator    admin
