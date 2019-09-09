import passport from "passport";
import passportJWT from "passport-jwt";
import { secret } from "../config";
var jwt = require("jsonwebtoken");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader("token");
jwtOptions.secretOrKey = secret;

let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("jwt_payload: ", jwt_payload);
  if (!jwt_payload) {
    console.log("ERRRER");
    let err = new Error("No token provided");
    next(err, null);
  } else {
    // console.log("JWT",jwt_payload);
    //res.locals.token = jwt_payload;
    next(null, jwt_payload);
  }
});

passport.use(strategy);

export default passport;
