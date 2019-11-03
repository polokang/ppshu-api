import Sequelize from "sequelize"
import BaseModel from "./baseModel"
//advise table

class advModel extends BaseModel {
  constructor() {
    super("adv", {
      author_id: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },
      image_link: { type: Sequelize.STRING },
      type: { type: Sequelize.STRING }, //[ image,slide,video ]
      status: { type: Sequelize.STRING },
      start_time: { type: Sequelize.DATE },
      end_time: { type: Sequelize.DATE },
      watchcnt: { type: Sequelize.INTEGER },
      commentcnt: { type: Sequelize.INTEGER },
      page_num: { type: Sequelize.INTEGER }, //0:首页，1：二级页面；2：详情页面
      position_order: { type: Sequelize.INTEGER } //排序
    })
    this.model = super.getModel()
    this.model.sync()
  }

  //根据id获取广告详情
  getAdvByIDDAO(advID) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "content",
        "image_link",
        "type",
        "status",
        "start_time",
        "end_time",
        "watchcnt",
        "commentcnt",
        "page_num",
        "position_order"
      ],
      where: { adv_id: advID }
    })
  }

  //根据不同级别的页面获取广告列表
  getAdvsByPageDAO(pageNum) {
    return this.model.findAll({
      attributes: [
        "id",
        "author_id",
        "title",
        "content",
        "image_link",
        "type",
        "status",
        "start_time",
        "end_time",
        "watchcnt",
        "commentcnt",
        "page_num",
        "position_order",
        "updatedAt"
      ],
      order: [["updatedAt", "DESC"]],
      where: { page_num: pageNum, status: "publish" }
    })
  }
}
module.exports = new advModel()
