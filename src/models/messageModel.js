import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class messageModel extends BaseModel {
  constructor() {
    super("message", {
      author_id: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.STRING },
      type: { type: Sequelize.TINYINT }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new messageModel()
