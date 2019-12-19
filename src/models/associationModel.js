import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class associationModel extends BaseModel {
  constructor() {
    super("associations", {
      name: { type: Sequelize.STRING },
      english: { type: Sequelize.STRING },
      icon_address: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new associationModel()
