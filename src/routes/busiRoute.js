const router = require("express").Router()

const { getBusiByBID, addBusi } = require("../controllers/busiCtrl")

router.get("/:busiID/get", getBusiByBID)
router.post("/addBusi", addBusi)

module.exports = router
