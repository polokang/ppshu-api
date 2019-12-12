import Sequelize from "sequelize"
import BaseModel from "./baseModel"
// const Joi = require("joi")

class UserModel extends BaseModel {
  constructor() {
    super("user", {
      open_id: { type: Sequelize.STRING },
      nickName: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      privilege: { type: Sequelize.TINYINT },
      gender: { type: Sequelize.TINYINT },
      city: { type: Sequelize.STRING },
      province: { type: Sequelize.STRING },
      country: { type: Sequelize.STRING },
      avatarUrl: { type: Sequelize.STRING },
      phone: { type: Sequelize.STRING },
      age: { type: Sequelize.TINYINT },
      email: { type: Sequelize.STRING },
      chamber: { type: Sequelize.STRING },
      occupation: { type: Sequelize.STRING },
      uType: { type: Sequelize.STRING }
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new UserModel()
