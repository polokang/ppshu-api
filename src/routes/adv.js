const router = require("express").Router()

const { getAdvsByPage, getAdvByID, addCnt } = require("../controllers/advCtrl")

router.get("/advs/:pageNum", getAdvsByPage)
router.get("/find/where", getAdvByID)
router.put("/:id/addCnt", addCnt) //根据field 增加广告对应field值加1
// router.get("/getlistByTag", getlistByTag)
// router.get("/getarticlelist", getarticlelist)
// router.post("/create", create)
// router.put("/:id/update", update)

module.exports = router
