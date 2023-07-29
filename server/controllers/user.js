import User from "../models/User.js"
import Video from "../models/Video.js"
import { createError } from "../error.js"
export const updateUser = async (req, res, next) => {
  if (req.params.userId === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (err) {
      next(err)
    }
  } else {
    return next(
      createError(403),
      "User not authenticated to update this account"
    )
  }
}
export const deleteUser = async (req, res, next) => {
  if (req.params.userId === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.userId)
      res.status(200).json("User has been deleted")
    } catch (err) {
      next(err)
    }
  } else {
    return next(
      createError(403),
      "User not authenticated to delete this account"
    )
  }
}
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const subscribeUser = async (req, res, next) => {
  try {
    // Add channel to user's subscriptions
    await User.updateOne(
      { _id: req.user.id },
      { $push: { subscribedUsers: req.params.userId } }
    )

    // Increment channel's subscriber count
    await User.updateOne(
      { _id: req.params.userId },
      { $inc: { subscribers: 1 } }
    )

    res.status(200).json("Subscribed successfully")
  } catch (err) {
    next(err)
  }
}
export const unsubscribeUser = async (req, res, next) => {
  try {
    // Add channel to user's subscriptions
    await User.updateOne(
      { _id: req.user.id },
      { $pull: { subscribedUsers: req.params.userId } }
    )

    // Increment channel's subscriber count
    await User.updateOne(
      { _id: req.params.userId },
      { $inc: { subscribers: -1 } }
    )

    res.status(200).json("Unubscribed successfully")
  } catch (err) {
    next(err)
  }
}

export const likeVideo = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    })
    res.status(200).json("The video has been liked")
  } catch (err) {
    next(err)
  }
}

export const dislikeVideo = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    })
    res.status(200).json("The video has been disliked")
  } catch (err) {
    next(err)
  }
}
