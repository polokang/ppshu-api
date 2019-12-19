const BaseService = require("./baseService")
import { AutoWritedAssociationModel } from "../utils/AutoWrite.js"

@AutoWritedAssociationModel
class AssociationService extends BaseService {
  constructor() {
    super(AssociationService.model)
  }
}
module.exports = new AssociationService()
