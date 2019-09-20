const userService = require("../services/userService")
const { formatResponse } = require("../utils/helper")
const { generateToken } = require("../utils/jwt")

// async function addUser(req, res) {
//   const { email, password, name } = req.body.user
//   const existingUser = await userService.getOneByField({ email })
//   if (existingUser) {
//     return formatResponse(res, "Email already exists", 400)
//   }

//   const user = await userService.createOne({
//     email,
//     password,
//     name
//   })
//   const token = generateToken(user._id)
//   return formatResponse(res, { email, name, token }, 201)
// }

async function addUser(req, res) {
  // const { nickname } = req.body.user
  // const existingUser = await userService.getOneByField({ nickname })
  // if (existingUser) {
  //   return formatResponse(res, "nickname already exists", 400)
  // }
  const user = await userService.baseCreate(req.body.user)
  const token = generateToken(user._id)
  return formatResponse(res, { user, token }, 201)
}
module.exports = {
  addUser
}
