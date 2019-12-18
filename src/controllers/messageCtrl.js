const messageService = require("../services/messageService")
const { formatResponse } = require("../utils/helper")

async function getMessageById(req, res) {
  const { id } = req.params
  const message = await messageService.baseFindByFilter(null, { id: id })
  return formatResponse(res, { message: message })
}

module.exports = {
  getMessageById
}
