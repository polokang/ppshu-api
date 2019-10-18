const express = require("express")
const multer = require("multer")

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const navRoute = require("./routes/nav")
const articleRoute = require("./routes/article")

const router = express.Router()

const client = multer({
  limits: {
    fileSize: 204800 * 204800
  }
})
const singleMiddle = client.single("file") //一次处理一张
const { uploadImage2OSS } = require("./utils/upload")

router.use("/user", userRoute)
router.use("/auth", authRoute)
router.use("/nav", navRoute)
router.use("/article", articleRoute)

router.use("/uploadImage", singleMiddle, uploadImage2OSS)

module.exports = router
