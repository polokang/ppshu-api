const multer = require("multer")
let OSS = require("ali-oss")

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

// async function uploadImage(filename) {
//   try {
//     let result = await client.put("test/" + filename, "uploads/" + filename)
//     console.log(result) //在此处记录 url name 等信息
//   } catch (err) {
//     console.log(err)
//   }
// }

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
  uploadImage
  // deleteImage,
  // checkResourceExist
}
