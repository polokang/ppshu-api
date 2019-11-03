const advService = require("../services/advService")
const { formatResponse } = require("../utils/helper")

async function getAdvsByPage(req, res) {
  const { pageNum } = req.params
  console.log("====", pageNum)
  const advs = await advService.getAdvsByPageService(parseInt(pageNum))
  return formatResponse(res, { data: advs })
}

module.exports = {
  getAdvsByPage
}
