const router = require("express").Router()
const { getMessageById } = require("../controllers/messageCtrl")

router.get("/", (req, res) => {
  res.send("welecom to getMessageById!!")
})

router.get("/:id/get", getMessageById)

module.exports = router
