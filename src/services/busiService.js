const BaseService = require("./baseService")
import { AutoWritedBusiModel } from "../utils/AutoWrite.js"

@AutoWritedBusiModel
class BusiService extends BaseService {
  constructor() {
    super(BusiService.model)
  }
}
module.exports = new BusiService()
