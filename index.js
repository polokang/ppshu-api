/* eslint-disable no-console */
var mysql = require("mysql")
const http = require("http")
var connection = mysql.createConnection({
  host: "149.129.62.161",
  user: "www_myopal_xin",
  password: "ppX2swJKWRtbsCKT",
  database: "www_myopal_xin"
})

connection.connect()

connection.query("SELECT category from navigation", function(error, results) {
  if (error) throw error
  http
    .createServer(function(req, res) {
      res.writeHead(200, { "Content-Type": "text/plain" })
      res.end("hello pm nodejs mysql" + results[0].category)
    })
    .listen(8081)
  console.log("The solution is: ", results[0].category)
})
