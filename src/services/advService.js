const BaseService = require("./baseService")
import { AutoWritedAdvModel } from "../utils/AutoWrite.js"

@AutoWritedAdvModel
class AdvService extends BaseService {
  constructor() {
    super(AdvService.model)
  }
  getAdvsByPageService(pageNum) {
    return AdvService.model.getAdvsByPageDAO(pageNum)
  }
}
module.exports = new AdvService()
