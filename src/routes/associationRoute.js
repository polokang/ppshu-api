const router = require("express").Router()
const {
  getAllAssociations,
  addAssociation
} = require("../controllers/associationCtrl")

router.get("/get", getAllAssociations)
router.post("/add", addAssociation)

module.exports = router
