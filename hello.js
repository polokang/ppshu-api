const http = require("http")
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("hello ppshu")
  })
  .listen(3002)

console.log("server test")
