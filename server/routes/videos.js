import express from "express"
import {
  addVideo,
  addView,
  deleteVideo,
  findVideo,
  langVideos,
  randomVideos,
  searchVideos,
  subVideos,
  trendingVideos,
  updateVideo,
} from "../controllers/video.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()
router.post("/", verifyToken, addVideo)
router.put("/:videoId", verifyToken, updateVideo)
router.delete("/:videoId", verifyToken, deleteVideo)
router.get("/find/:videoId", findVideo)
router.get("/view/:videoId", verifyToken, addView)
router.get("/trend", trendingVideos)
router.get("/random", verifyToken, randomVideos)
router.get("/subscribed", verifyToken, subVideos)
router.get("/language/:langName", langVideos)
router.get("/search", searchVideos)
export default router
