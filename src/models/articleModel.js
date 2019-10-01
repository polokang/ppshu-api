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
      category: { type: Sequelize.STRING },
      tag: { type: Sequelize.STRING },
      watchcnt: { type: Sequelize.INTEGER },
      commentcnt: { type: Sequelize.INTEGER }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new articleModel()
