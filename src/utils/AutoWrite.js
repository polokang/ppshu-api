//模拟工厂模式，给每个target的原型上注入新属性
module.exports = {
  AutoWritedUserModel(target) {
    target.model = require("../models/userModel")
  },
  AutoWritedNavModel(target) {
    target.model = require("../models/navModel")
  },
  AutoWritedArticleModel(target) {
    target.model = require("../models/articleModel")
  },
  AutoWritedAdvModel(target) {
    target.model = require("../models/advModel")
  },
  AutoWritedMessageModel(target) {
    target.model = require("../models/messageModel")
  },
  AutoWritedAssociationModel(target) {
    target.model = require("../models/associationModel")
  },
  AutoWritedBusiModel(target) {
    target.model = require("../models/busiModel")
  }
}
