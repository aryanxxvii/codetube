import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
const cors = require("cors")
const app = express()
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
dotenv.config()
const port = process.env.PORT || 8080
// Connecting to mongoDB
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB")
    })
    .catch((e) => {
      console.log(e)
    })
}

// Mounting controllers to app
app.use(express.json())
app.use(cookieParser())
app.use("/api/users", userRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/auth", authRoutes)
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || "Something went wrong"
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  })
})
// Server ON
app.listen(port, () => {
  connect()
  console.log("Connected to server")
})
