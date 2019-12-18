import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class articleModel extends BaseModel {
  constructor() {
    super("article", {
      article_id: { type: Sequelize.STRING },
      author_id: { type: Sequelize.STRING },
      post_date: { type: Sequelize.DATE },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
      tag: { type: Sequelize.STRING },
      watchcnt: { type: Sequelize.INTEGER },
      commentcnt: { type: Sequelize.INTEGER },
      image_link: { type: Sequelize.TEXT },
      likecnt: { type: Sequelize.INTEGER },
      unlikecnt: { type: Sequelize.INTEGER },
      cert: { type: Sequelize.TINYINT }
    })
    this.model = super.getModel()
    this.model.sync()
  }

  getArticleByIDDAO(articleID) {
    return this.model.findAll({
      attributes: [
        "id",
        "article_id",
        "author_id",
        "title",
        "category",
        "status",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      where: { article_id: articleID }
    })
  }

  getArticleByPageDAO(offset, limit) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "category",
        "status",
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
        "status",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      order: [["updatedAt", "DESC"]],
      offset: offset,
      limit: limit,
      where: { tag: tag, status: "publish" }
    })
  }

  //根据文章类型（中文）获取文章列表
  getListByCTypeDAO(ctype, offset, limit) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "category",
        "status",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      order: [["updatedAt", "DESC"]],
      offset: offset,
      limit: limit,
      where: { category: ctype, status: "publish" }
    })
  }
}
module.exports = new articleModel()
