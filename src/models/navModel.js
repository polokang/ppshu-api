import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class navModel extends BaseModel {
  constructor() {
    super("navigation", {
      category: { type: Sequelize.STRING },
      father_id: { type: Sequelize.INTEGER }, //0:黄页类(articles表) ; -1：资讯类(advs表)
      a_id: { type: Sequelize.INTEGER }, // 根据father_id关联不同表(articles表和advs表)的id
      icon_address: { type: Sequelize.STRING } //该行业的广告位图片
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new navModel()
