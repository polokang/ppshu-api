const navService = require("../services/navService")
const { formatResponse } = require("../utils/helper")
var aliOSS = require("../utils/oss")

async function getAllNavs(req, res) {
  const navs = await navService.baseFindAll()
  return formatResponse(res, { data: navs })
}

async function getNavsByFID(req, res) {
  const navs = await navService.baseFindByFilter(null, req.query)
  return formatResponse(res, navs)
}

async function updateNavByID(req, res) {
  const navs = await navService.baseUpdate(
    req.body["update"],
    req.body["where"]
  )

  return formatResponse(res, navs)
}

async function updateNavPic(req, res) {
  const { id } = req.params
  try {
    let result = await aliOSS.put(req.file.path, req.file.path)
    navService.baseUpdate({ icon_address: result.url }, { id: id })
    return formatResponse(res, { pic: result.url })
  } catch (err) {
    console.log(err)
    return formatResponse(res, err)
  }
}

async function create(req, res) {
  const nav = await navService.baseCreate(req.body["entity"])

  return formatResponse(res, { data: nav })
}

module.exports = {
  getAllNavs,
  getNavsByFID,
  updateNavByID,
  updateNavPic,
  create
}
