import express from "express"
import { signin, signup } from "../controllers/auth.js"
const router = express.Router()

// User creation
router.post("/signup", signup)

// User sign-in
router.post("/signin", signin)

// Google auth
router.post("/google")

export default router
