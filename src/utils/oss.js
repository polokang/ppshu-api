let OSS = require("ali-oss")

const { OSS_REGION, OSS_KEYID, OSS_SECRET, OSS_BUCKET } = process.env

const aliOSS = new OSS({
  region: OSS_REGION, //阿里云对象存储地域名
  accessKeyId: OSS_KEYID, //api接口id
  accessKeySecret: OSS_SECRET //api接口密码
})

aliOSS.useBucket(OSS_BUCKET) //使用的存储桶名

module.exports = aliOSS
