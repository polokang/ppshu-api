const router = require("express").Router()

const {
  getAllNavs,
  getNavsByFID,
  updateNavByID,
  updateNavPic,
  create
} = require("../controllers/nav")

const { uploadImage } = require("../utils/upload")

router.get("/", getAllNavs)
router.get("/find/where", getNavsByFID)
router.put("/update", updateNavByID)

router.put("/:id/navPicture", uploadImage("id", "filepath"), updateNavPic)
router.post("/create", create)
module.exports = router
