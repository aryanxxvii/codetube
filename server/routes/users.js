import express from "express"
import {
  deleteUser,
  getUser,
  likeVideo,
  dislikeVideo,
  subscribeUser,
  unsubscribeUser,
  updateUser,
} from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()

// Update a user from userId
router.put("/:userId", verifyToken, updateUser)
// Delete existing user from userId
router.delete("/:userId", verifyToken, deleteUser)
// Get user from userId
router.get("/find/:userId", getUser)
// Subscribe a user from userId
router.put("/subscribe/:userId", verifyToken, subscribeUser)
// Unsubscribe a user from userId
router.put("/unsubscribe/:userId", verifyToken, unsubscribeUser)
// Like a video from videoId
router.put("/like/:videoId", verifyToken, likeVideo)
// Dislike a video from videoId
router.put("/dislike/:videoId", verifyToken, dislikeVideo)

export default router
