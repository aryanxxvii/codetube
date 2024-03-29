import jwt from "jsonwebtoken"
import { createError } from "./error.js"
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) return next(createError(401, "User not authenticated"))
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(creatError(403, "Invalid Token"))
    req.user = user
    next()
  })
}
