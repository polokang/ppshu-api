import Sequelize from "sequelize"
import BaseModel from "./baseModel.js"
class ArticleMetaModel extends BaseModel {
  constructor() {
    super("articlemeta", {
      artile_id: { type: Sequelize.INTEGER },
      meta_key: { type: Sequelize.STRING },
      meta_value: { type: Sequelize.TEXT }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new ArticleMetaModel()
