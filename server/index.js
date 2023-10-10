// Express application created.
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// database connection
const sequelizeDb = require("./db/sql");
const dummyData = require("./db/dummydata");
const bodyParser = require("body-parser");

// routes
const main = require("./routes/main");
const about = require("./routes/about");
const admin = require("./routes/admin");
// Add CORS middleware to the Express application with specific options.
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRETKEY,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
    resave: false,
  })
);

app.use("/", main);
app.use("/about", about);
app.use("/admin", admin);
app.use("/libs", express.static(path.join(__dirname, "node_modules")));

async function sync() {
  await sequelizeDb.sync({ alter: true });
  await dummyData();
}
sync();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Port ${port} dinleniyor`);
});
