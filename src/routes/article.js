const router = require("express").Router()

const { create, getAll } = require("../controllers/article")

router.get("/", getAll)
router.post("/create", create)

module.exports = router
