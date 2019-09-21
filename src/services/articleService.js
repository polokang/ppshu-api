const BaseService = require("./baseService")
import { AutoWritedArticleModel } from "../utils/AutoWrite.js"

@AutoWritedArticleModel
class ArticleService extends BaseService {
  constructor() {
    super(ArticleService.model)
  }
}
module.exports = new ArticleService()
