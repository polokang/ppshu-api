const router = require("express").Router()

const {
  create,
  getAll,
  update,
  getarticlelist,
  getlistByTag,
  getlistByCType
} = require("../controllers/article")

router.get("/", getAll)
router.get("/getlistByTag", getlistByTag)
router.get("/getarticlelist", getarticlelist)
router.get("/getlistByCType", getlistByCType) //根据文章类型（中文）获取文章列表

router.post("/create", create)
router.put("/:id/update", update)

module.exports = router
