const navService = require("../services/navService")
const { formatResponse } = require("../utils/helper")
var aliOSS = require("../utils/oss")

async function getAdminMenuData(req, res) {
  const navs = await navService.baseFindAll()
  let businessesArr = []
  let secondMenuIdArr = [2, 3, 4, 5, 6, 7, 8, 9]
  let articleMenu = {
    path: "/articles",
    name: "专栏管理",
    icon: "audit",
    children: []
  }
  let tradesMenu = {
    path: "/trades",
    name: "交易管理",
    icon: "transaction",
    children: []
  }
  let userMenu = {
    path: "/users",
    name: "用户管理",
    icon: "user"
  }
  let configMenu = {
    path: "/config",
    name: "系统配置",
    icon: "tool"
  }

  navs.forEach(v => {
    if (secondMenuIdArr.indexOf(v.id) > -1) {
      let obj = {
        id: v.id,
        path: "/businesses/" + v.id,
        name: v.category,
        children: []
      }
      businessesArr.push(obj)
      // navs.splice(i - 1, 1)
    } else {
      if (v.father_id === -1) {
        let artileMenuObj = {
          id: v.id,
          path: "/articles/" + v.id,
          name: v.category
        }
        articleMenu.children.push(artileMenuObj)
      } else if (v.father_id === 1) {
        let tradeMenuObj = {
          id: v.id,
          path: "/trades/" + v.id,
          name: v.category
        }
        tradesMenu.children.push(tradeMenuObj)
      }
    }
  })

  businessesArr.forEach(v => {
    navs.forEach(value => {
      if (value.father_id === v.id) {
        let obj = {
          id: value.id,
          path: "/businesses/" + value.id,
          name: value.category
        }
        v.children.push(obj)
        // navs.splice(key, 1)
      }
    })
  })

  let navArr = [
    {
      path: "/advertisements",
      name: "广告管理",
      icon: "solution",
      children: [
        {
          path: "/advertisements/firstpage",
          name: "首页广告"
        },
        {
          path: "/advertisements/secondpage",
          name: "二级页面广告"
        },
        {
          path: "/advertisements/detailpage",
          name: "详情页面广告"
        }
      ]
    },
    {
      path: "/businesses",
      name: "商户管理",
      icon: "shop",
      children: businessesArr
    },
    articleMenu,
    tradesMenu,
    userMenu,
    configMenu
  ]

  return formatResponse(res, { data: navArr })
}

async function getAllNavs(req, res) {
  const navs = await navService.baseFindAll()
  return formatResponse(res, { data: navs })
}

async function getNavsByFID(req, res) {
  const navs = await navService.baseFindByFilter(null, req.query)
  return formatResponse(res, navs)
}

async function updateNavByID(req, res) {
  const navs = await navService.baseUpdate(
    req.body["update"],
    req.body["where"]
  )

  return formatResponse(res, navs)
}

async function updateNavPic(req, res) {
  const { id } = req.params
  try {
    let result = await aliOSS.put(req.file.path, req.file.path)
    navService.baseUpdate({ icon_address: result.url }, { id: id })
    return formatResponse(res, { pic: result.url })
  } catch (err) {
    console.log(err)
    return formatResponse(res, err)
  }
}

async function create(req, res) {
  const nav = await navService.baseCreate(req.body["entity"])
  return formatResponse(res, { data: nav })
}

async function getNavById(req, res) {
  const { id } = req.params
  const nav = await navService.baseFindByFilter(null, { id: id })
  return formatResponse(res, nav)
}

module.exports = {
  getAllNavs,
  getNavsByFID,
  updateNavByID,
  updateNavPic,
  create,
  getNavById,
  getAdminMenuData
}
