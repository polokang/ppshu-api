const advService = require("../services/advService")
const { formatResponse } = require("../utils/helper")

async function getAdvsByPage(req, res) {
  const { pageNum } = req.params
  const advs = await advService.getAdvsByPageService(parseInt(pageNum))
  return formatResponse(res, { data: advs })
}

async function getAdvByID(req, res) {
  const adv = await advService.baseFindByFilter(null, req.query)
  return formatResponse(res, adv)
}

async function addWatchByID(req, res) {
  const { id } = req.params
  const { num } = req.query
  const watchNum = advService.baseUpdate({ watchcnt: num }, { id: id })
  return formatResponse(res, { watchNum: watchNum })
}

module.exports = {
  getAdvsByPage,
  getAdvByID,
  addWatchByID
}
