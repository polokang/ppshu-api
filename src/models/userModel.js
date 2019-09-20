import Sequelize from "sequelize"
import BaseModel from "./baseModel"

class UserModel extends BaseModel {
  constructor() {
    super("user", {
      nickname: { type: Sequelize.STRING },
      age: { type: Sequelize.INTEGER },
      sex: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new UserModel()
