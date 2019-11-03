const router = require("express").Router()

const { getAdvsByPage } = require("../controllers/advCtrl")

router.get("/advs/:pageNum", getAdvsByPage)
// router.get("/getlistByTag", getlistByTag)
// router.get("/getarticlelist", getarticlelist)
// router.post("/create", create)
// router.put("/:id/update", update)

module.exports = router
