const router = require("express").Router()

const { create, getAll, update } = require("../controllers/article")

router.get("/", getAll)
router.post("/create", create)
router.put("/:id/update", update)

module.exports = router
