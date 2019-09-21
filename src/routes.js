const express = require("express")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const navRoute = require("./routes/nav")
const articleRoute = require("./routes/article")
const router = express.Router()

router.use("/user", userRoute)
router.use("/auth", authRoute)
router.use("/nav", navRoute)
router.use("/article", articleRoute)

module.exports = router
