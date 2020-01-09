const busiService = require("../services/busiService")
const { formatResponse } = require("../utils/helper")

async function getBusiByBID(req, res) {
  const { busiID } = req.params
  const busi = await busiService.baseFindByFilter(null, { busi_id: busiID })
  return formatResponse(res, { data: busi })
}

async function addBusi(req, res) {
  const busi = await busiService.baseCreate(req.body["entity"])
  return formatResponse(res, { data: busi })
}

module.exports = {
  getBusiByBID,
  addBusi
}
