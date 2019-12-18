const BaseService = require("./baseService")
import { AutoWritedMessageModel } from "../utils/AutoWrite.js"

@AutoWritedMessageModel
class MessageService extends BaseService {
  constructor() {
    super(MessageService.model)
  }
}
module.exports = new MessageService()
