const BaseService = require("./baseService")
import { AutoWritedNavModel } from "../utils/AutoWrite.js"

@AutoWritedNavModel
class NavService extends BaseService {
  constructor() {
    super(NavService.model)
  }
}
module.exports = new NavService()
