import { secret } from "../config";

import jwt from "jsonwebtoken";

export function tokenGenerate(payload) {
  let token = jwt.sign(payload, secret, {
    expiresIn: 1800,
    algorithm: "HS256"
  });
  return token;
}
