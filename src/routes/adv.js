const router = require("express").Router()

const {
  getAdvsByPage,
  getAdvByID,
  addWatchByID
} = require("../controllers/advCtrl")

router.get("/advs/:pageNum", getAdvsByPage)
router.get("/find/where", getAdvByID)
router.put("/:id/addWatch", addWatchByID) //增加阅读数
// router.get("/getlistByTag", getlistByTag)
// router.get("/getarticlelist", getarticlelist)
// router.post("/create", create)
// router.put("/:id/update", update)

module.exports = router
