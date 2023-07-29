import Comment from "../models/Comment.js"
import Video from "../models/Video.js"
import { createError } from "../error.js"
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id })
  try {
    const savedComment = await Comment.save()
    res.status(200).send(savedComment)
  } catch (err) {
    next(err)
  }
}
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId)
    const video = await Video.findById(comment.videoId)
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.commentId)
      res.status(200).json("The comment has been deleted")
    }
  } catch (err) {
    next(err)
  }
}
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).sort({
      createdAt: -1,
    })
    res.status(200).json(comments)
  } catch (err) {
    next(err)
  }
}
