import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class articleModel extends BaseModel {
  constructor() {
    super("businesses", {
      busi_id: { type: Sequelize.STRING },
      author_id: { type: Sequelize.STRING },
      post_date: { type: Sequelize.DATE },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },
      contact: { type: Sequelize.STRING },
      address: { type: Sequelize.TEXT },
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

  getBusinessByIDDAO(businessID) {
    return this.model.findAll({
      attributes: [
        "id",
        "busi_id",
        "author_id",
        "title",
        "content",
        "contact",
        "address",
        "category",
        "status",
        "tag",
        "watchcnt",
        "commentcnt",
        "image_link",
        "updatedAt"
      ],
      where: { busi_id: businessID }
    })
  }
}
module.exports = new articleModel()
