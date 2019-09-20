module.exports = {
  apps: [
    {
      name: "pps",
      script: "src/app.js",
      instances: "1",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      out_file: "logs/out-0.log",
      error_file: "logs/err-0.log",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
