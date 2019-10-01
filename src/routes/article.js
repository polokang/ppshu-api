const router = require("express").Router()

const {
  create,
  getAll,
  update,
  getarticlelist
} = require("../controllers/article")

router.get("/", getAll)
router.get("/getarticlelist", getarticlelist)
router.post("/create", create)
router.put("/:id/update", update)

module.exports = router
