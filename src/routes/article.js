const router = require("express").Router()

const {
  create,
  getAll,
  update,
  getarticlelist,
  getlistByTag
} = require("../controllers/article")

router.get("/", getAll)
router.get("/getlistByTag", getlistByTag)
router.get("/getarticlelist", getarticlelist)
router.post("/create", create)
router.put("/:id/update", update)

module.exports = router
