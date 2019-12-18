const router = require("express").Router()
const {
  addUser,
  login,
  update,
  getUserByOpenid
} = require("../controllers/user")

router.get("/", (req, res) => {
  res.send("welecom to get user function!!")
})

router.get("/:openid/get", getUserByOpenid)

router.post("/addUser", addUser)
router.post("/login", login)
router.put("/:openid/update", update)
// router.post("/", (req, res) => {
//   console.log(req.body)
//   res.send("============>")
// })

module.exports = router
