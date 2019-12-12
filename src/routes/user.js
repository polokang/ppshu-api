const router = require("express").Router()
const { addUser, login, update } = require("../controllers/user")

router.get("/", (req, res) => {
  res.send("welecom to get user function!!")
})

router.post("/addUser", addUser)
router.post("/login", login)
router.put("/:id/update", update)
// router.post("/", (req, res) => {
//   console.log(req.body)
//   res.send("============>")
// })

module.exports = router
