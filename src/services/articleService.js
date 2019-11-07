const BaseService = require("./baseService")
import { AutoWritedArticleModel } from "../utils/AutoWrite.js"

@AutoWritedArticleModel
class ArticleService extends BaseService {
  constructor() {
    super(ArticleService.model)
  }
  getArticleByPageService(offset, limit = 10) {
    return ArticleService.model.getArticleByPageDAO(offset, limit)
  }
  getlistByTag(tag, offset, limit) {
    return ArticleService.model.getListByTagDAO(tag, offset, limit)
  }

  getlistByCType(ctype = "投资咨询", offset = 0, limit = 10) {
    return ArticleService.model.getListByCTypeDAO(ctype, offset, limit)
  }
}
module.exports = new ArticleService()
