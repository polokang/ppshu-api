const router = require("express").Router()

const {
  create,
  getAll,
  update,
  getarticlelist,
  getlistByTag,
  getlistByCType,
  getarticleByID,
  addWatchByID
} = require("../controllers/article")

router.get("/", getAll)
router.get("/getlistByTag", getlistByTag)
router.get("/getarticlelist", getarticlelist)
router.get("/getlistByCType", getlistByCType) //根据文章类型（中文）获取文章列表
router.get("/find/where", getarticleByID)

router.post("/create", create)
router.put("/:id/update", update)

router.put("/:id/addWatch", addWatchByID) //增加阅读数

module.exports = router
