const BaseService = require("./baseService")
import { AutoWritedArticleModel } from "../utils/AutoWrite.js"

@AutoWritedArticleModel
class ArticleService extends BaseService {
  constructor() {
    super(ArticleService.model)
  }
  getArticleByPageService(offset, limit) {
    return ArticleService.model.getArticleByPageDAO(offset, limit)
  }
}
module.exports = new ArticleService()
