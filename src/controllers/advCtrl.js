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

async function addCnt(req, res) {
  const { id } = req.params
  const { field } = req.body["data"]
  const article = await advService.baseFindByFilter(null, { id: id })
  let num = article[0].dataValues[field] + 1
  advService.baseUpdate(
    { [field]: num },
    {
      id: id
    }
  )
  return formatResponse(res, article)
}

module.exports = {
  getAdvsByPage,
  getAdvByID,
  addCnt
}
