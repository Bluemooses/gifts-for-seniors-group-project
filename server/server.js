const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const wishlistRouter = require("./routes/wishlist.router");
const barrelCreate = require("./routes/barrel-create.router");
const barrelEdit = require("./routes/barrel-edit.router");
const barrelUpdate = require("./routes/barrel-update.router");
const barrelSelect = require("./routes/barrel-select.router");
const barrelSearch = require("./routes/barrel-search.router");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/barrel-update", barrelUpdate);
app.use("/api/barrel-select", barrelSelect);
app.use("/api/barrel-edit", barrelEdit);
app.use("/api/barrel-create", barrelCreate);
app.use("/api/barrel-search", barrelSearch);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
