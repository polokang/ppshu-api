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
  }
}
