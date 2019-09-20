const express = require("express")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const navRoute = require("./routes/nav")

const router = express.Router()

router.use("/user", userRoute)
router.use("/auth", authRoute)
router.use("/nav", navRoute)

module.exports = router
