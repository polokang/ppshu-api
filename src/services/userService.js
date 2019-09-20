const BaseService = require("./baseService")
// const AutoWritedUserModel = require("../utils/AutoWrite")
import { AutoWritedUserModel } from "../utils/AutoWrite.js"

@AutoWritedUserModel
class UserService extends BaseService {
  constructor() {
    super(UserService.model)
  }
}
module.exports = new UserService()
