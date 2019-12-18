const userService = require("../services/userService")
const { formatResponse } = require("../utils/helper")
const { generateToken } = require("../utils/jwt")
const bcrypt = require("bcryptjs")

async function addUser(req, res) {
  const { open_id, uType } = req.body.user
  const token = generateToken(open_id)
  let user = null
  let userObj = req.body.user
  const existingUser = await userService.baseFindByFilter(null, {
    open_id: open_id
  })

  if (existingUser.length > 0) {
    let now = Date.now()
    userObj["updatedAt"] = now
    user = await userService.baseUpdate(req.body["user"], {
      open_id: open_id
    })
    user = existingUser[0]
    return formatResponse(res, { user, token }, 201)
  } else {
    let pwd = ""
    if (uType === "web") {
      pwd = await bcrypt.hash(req.body.user.password, 10)
      userObj["password"] = pwd
    }
    user = await userService.baseCreate(userObj)
  }

  return formatResponse(res, { user, token }, 201)
}

async function login(req, res) {
  const { email, password } = req.body.user
  const existingUser = await userService.baseFindByFilter(null, {
    email: email
  })

  if (existingUser.length > 0) {
    const validPassword = await bcrypt.compare(
      password,
      existingUser[0].password
    )
    if (!validPassword) {
      return formatResponse(res, "Invalid email or password.", 400)
    } else {
      const token = generateToken(existingUser[0].open_id)
      return formatResponse(res, { user: existingUser, token })
    }
  } else {
    return formatResponse(res, "User is not exist.", 400)
  }
}

async function update(req, res) {
  const { openid } = req.params
  const userInfo = await userService.baseUpdate(req.body["user"], {
    open_id: openid
  })
  return formatResponse(res, { data: userInfo })
}

async function getUserByOpenid(req, res) {
  const { openid } = req.params
  const userInfo = await userService.baseFindByFilter(null, { open_id: openid })
  return formatResponse(res, { user: userInfo })
}

module.exports = {
  addUser,
  login,
  update,
  getUserByOpenid
}
