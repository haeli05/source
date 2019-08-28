// Essentials
import "babel-polyfill";
import Express from "express";
import path from "path";
import bodyParser from "body-parser";
// API
import axios from "axios";
import cors from "cors";
var morgan = require("morgan");

import user from "./user/user.routes";
import ideas from "./ideas/ideas.routes";
import projects from "./projects/projects.routes";
import boards from "./boards/boards.routes";

const app = new Express();
// CORS
app.use(cors());
app.use(morgan("dev"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Connection, DNT, Host, If-None-Match, TE, Upgrade-Insecure-Requests, User-Agent"
  );
  next();
});
// API
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
app.use("/api", projects);

app.use("/api", user);
app.use("/api", ideas);
app.use("/api", boards);

// Lift off!
app.listen(8001, error => {
  if (!error) {
    console.log(`Server Started 8001!`); // eslint-disable-line
  }
});
