const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const config = require("./lib/config")
const bcrypt = require("bcrypt");

const store = require("connect-loki");
const app = express();
const host = config.HOST;
const port = config.PORT;
const LokiStore = store(session);

app.use(morgan("common"));
app.use(express.static("lib"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days
    path: "/",
    secure: false,
  },
  name: "math-generator-session-id",
  resave: false,
  saveUnitialized: true,
  secret: "not so secret",
  store: new LokiStore({}),
}));

// Actual database goes here once we have one
// app.use((req, res, next) => {
//   res.locals.store = new database(req.session);
//   next();
// });

// To make session data available
// app.use((req, res, next) => {
//   res.locals.username = req.session.username;
//   res.locals.signedIn = req.session.signedIn;
//   next();
// });

app.get("/", (req, res) => {
  res.sendFile("lib/index.html", { root: __dirname });
});

// Error handler
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(port, host, () => {
  console.log(`Math generator is litening on port ${port} of ${host}`);
});