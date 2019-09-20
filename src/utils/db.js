var Sequelize = require("sequelize")

const { DB_HOST, DB_PORT, DB_DATABASE, DB_PASSWORD, DB_USER } = process.env
let connectionString

if (DB_PASSWORD && DB_USER) {
  connectionString = `mariadb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
} else {
  connectionString = `mariadb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
}

const sequelize = new Sequelize(connectionString, {
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功...")
  })
  .catch(err => {
    console.error("数据库连接失败...", err)
  })

// exports.connectToDB = () => {
//   return sequelize.authenticate().then
// }

module.exports = sequelize
