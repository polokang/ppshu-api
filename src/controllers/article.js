const articleService = require("../services/articleService")
const { formatResponse } = require("../utils/helper")

async function create(req, res) {
  const article = await articleService.baseCreate(req.body["entity"])

  return formatResponse(res, { data: article })
}

async function getAll(req, res) {
  const articles = await articleService.baseFindAll()
  return formatResponse(res, { data: articles })
}

async function update(req, res) {
  const { id } = req.params
  const article = await articleService.baseUpdate(req.body["entity"], {
    id: id
  })
  return formatResponse(res, { data: article })
}

async function getarticlelist(req, res) {
  const { curPage, limit } = req.query
  const articles = await articleService.getArticleByPageService(
    parseInt(curPage),
    parseInt(limit)
  )
  return formatResponse(res, { data: articles })
}

async function getlistByTag(req, res) {
  const { tag, curPage, limit } = req.query
  const articles = await articleService.getlistByTag(
    tag,
    parseInt(curPage),
    parseInt(limit)
  )
  return formatResponse(res, { data: articles })
}

async function getlistByCType(req, res) {
  const { ctype, curPage, limit } = req.query
  const articles = await articleService.getlistByCType(
    ctype,
    parseInt(curPage),
    parseInt(limit)
  )
  return formatResponse(res, { data: articles })
}

async function getarticleByID(req, res) {
  const article = await articleService.baseFindByFilter(null, req.query)
  return formatResponse(res, article)
}

async function addWatchByID(req, res) {
  const { id } = req.params
  const { num } = req.query
  const watchNum = articleService.baseUpdate({ watchcnt: num }, { id: id })
  return formatResponse(res, { watchNum: watchNum })
}

module.exports = {
  create,
  getAll,
  update,
  getarticlelist,
  getlistByTag,
  getlistByCType,
  getarticleByID,
  addWatchByID
}
