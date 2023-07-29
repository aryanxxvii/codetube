import Video from "../models/Video.js"
import { createError } from "../error.js"
export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body })
  try {
    const savedVideo = await newVideo.save()
    res.status(200).json(savedVideo)
  } catch (err) {
    next(createError(500, "Something went wrong"))
  }
}

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, "Video not found"))
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.videoId,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedVideo)
    } else {
      return next(createError(403, "Unauthorized to update this video"))
    }
  } catch (err) {
    next(err)
  }
}

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, "Video not found"))
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.videoId)
      res.status(200).json("Video deleted successfully")
    } else {
      return next(createError(403, "Unauthorized to delete this video"))
    }
  } catch (err) {
    next(err)
  }
}

export const findVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, "Video not found"))
    res.status(200).json(video)
  } catch (err) {
    next(err)
  }
}

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(
      req.params.videoId,
      {
        $inc: { views: 1 },
      },
      { new: true }
    )
    res.status(200).json("Increased view count by one")
  } catch (err) {
    next(err)
  }
}

export const randomVideos = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }])
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const trendingVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 })
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const subVideos = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    const subscribedChannels = user.subscribedUsers
    const subVideos = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId })
      })
    )
    res
      .status(200)
      .json(subVideos.flat().sort((a, b) => b.createdAt - a.createdAt))
  } catch (err) {
    next(err)
  }
}

export const langVideos = async (req, res, next) => {
  try {
    const videos = await Video.find({
      language: { $regex: new RegExp(`^${req.params.langName}$`, "i") },
    }).sort({
      createdAt: -1,
    })
    if (!videos) return next(createError(404, "No videos for this language"))
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const searchVideos = async (req, res, next) => {
  const query = req.query.q
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40)
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}
