const router = require("express").Router()

const {
  create,
  getAll,
  update,
  getarticlelist,
  getlistByTag,
  getlistByCType,
  getarticleByID,
  addCnt
} = require("../controllers/article")

router.get("/", getAll)
router.get("/getlistByTag", getlistByTag)
router.get("/getarticlelist", getarticlelist)
router.get("/getlistByCType", getlistByCType) //根据文章类型（中文）获取文章列表
router.get("/find/where", getarticleByID)

router.post("/create", create)
router.put("/:id/update", update)

router.put("/:id/addCnt", addCnt) //根据field 增加文章对应field值加1

module.exports = router
