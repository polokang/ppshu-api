import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class navModel extends BaseModel {
  constructor() {
    super("navigation", {
      category: { type: Sequelize.STRING },
      father_id: { type: Sequelize.INTEGER },
      nav_level: { type: Sequelize.INTEGER },
      icon_address: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new navModel()
