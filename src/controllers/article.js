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

module.exports = {
  create,
  getAll
}
