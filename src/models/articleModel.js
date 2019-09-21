import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class articleModel extends BaseModel {
  constructor() {
    super("article", {
      author_id: { type: Sequelize.INTEGER },
      post_date: { type: Sequelize.DATE },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.STRING },
      status: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new articleModel()
