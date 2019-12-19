const associationService = require("../services/associationService")
const { formatResponse } = require("../utils/helper")

async function getAllAssociations(req, res) {
  const associations = await associationService.baseFindAll()
  return formatResponse(res, { data: associations })
}

async function addAssociation(req, res) {
  const ass = await associationService.baseCreate(req.body["entity"])
  return formatResponse(res, { data: ass })
}

module.exports = {
  getAllAssociations,
  addAssociation
}
