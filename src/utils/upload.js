const multer = require("multer")
let OSS = require("ali-oss")
const moment = require("moment")
const { formatResponse } = require("./helper")

let client = new OSS({
  region: "oss-ap-southeast-2", //阿里云对象存储地域名
  accessKeyId: "LTAI4FeGTL1sgFJuZgX3wiay", //api接口id
  accessKeySecret: "IVpF0bJZ4kNlULWDC6dZTC9rlwvZWB" //api接口密码
})

client.useBucket("pps-sydney") //使用的存储桶名

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true)
  } else {
    cb({ name: "MulterError", message: "Only support jpeg image" })
  }
}

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads")
  },
  //上传的文件以 时间(毫秒级) + 原来的名字命名
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

// const uploadImage = (key, fieldName) => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve("foo")
//     }, 300)
//   })
// }

const uploadImage = (key, fieldName) => {
  return multer({
    storage: storage,
    limits: {
      fileSize: 204800 * 204800
    },
    fileFilter
  }).single(fieldName)
}

async function uploadImage2OSS(req, res) {
  var fileType = req.file.mimetype
  var lastName = ""
  switch (fileType) {
    case "image/png":
      lastName = ".png"
      break
    case "image/jpeg":
      lastName = ".jpg"
      break
    default:
      lastName = ".png"
      break
  }
  // 构建图片名
  var fileName =
    "wechat/" +
    req.body.articleid +
    "-" +
    moment(Date.now()).format("MMDDHHmmss") +
    lastName

  try {
    let result = await client.put(fileName, req.file.path)
    return formatResponse(res, { ossurl: result.url })
  } catch (err) {
    console.log(err)
    return formatResponse(res, err)
  }
}

// const deleteImage = key =>
//   new Promise((res, rej) => {
//     s3.deleteObject({ Bucket: BUCKET, Key: key }, (err, data) => {
//       if (err) rej(err)
//       res(data)
//     })
//

// const checkResourceExist = key =>
//   new Promise(res => {
//     s3.headObject({ Bucket: BUCKET, Key: key }, err =>
//       err ? res(false) : res(true)
//     )
//   })

module.exports = {
  client,
  uploadImage,
  uploadImage2OSS
  // deleteImage,
  // checkResourceExist
}
