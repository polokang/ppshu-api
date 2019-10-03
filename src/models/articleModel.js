import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class articleModel extends BaseModel {
  constructor() {
    super("article", {
      author_id: { type: Sequelize.INTEGER },
      post_date: { type: Sequelize.DATE },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
      tag: { type: Sequelize.STRING },
      watchcnt: { type: Sequelize.INTEGER },
      commentcnt: { type: Sequelize.INTEGER },
      image_link: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }

  getArticleByPageDAO(offset, limit) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "category",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      order: [["updatedAt", "DESC"]],
      offset: offset,
      limit: limit,
      where: { tag: { [Sequelize.Op.ne]: "AD" }, status: "publish" }
    })
  }

  getListByTagDAO(tag, offset, limit) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "category",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      order: [["updatedAt", "DESC"]],
      offset: offset,
      where: { tag: tag, status: "publish" }
    })
  }
}
module.exports = new articleModel()
