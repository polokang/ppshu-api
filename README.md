# ppshu-api

# API

1. CRUD a articles

- [ 根据文章类型（中文）获取文章列表] <get> /article/getlistByCType?ctype=专栏作家&curPage=0&limit=10
  - ctype 默认值：投资咨询
  - limit 默认值：10

* [add article] /article/create

  - tag:'AD' 表示是广告，需展示在幻灯片区域
  - status: 'publish'
  - {
    "entity": {
    "author_id": 1,
    "post_date": "2000-09-18 10:00:00",
    "title": "文章标题",
    "content": "文章内容",
    "status": "publish",
    "category": "交易平台",
    "status": "publish",
    "tag":"交易平台",
    },
    "images":[]
    }

  - 图片上传：

    - 数据库中 image_link 字段可存储多张图片，用 `,` 分割，目前一条新闻可上传 9 张图片
    - 第一张图片为列表展示图片

- [get all article] /article
- [get article list] /article/getarticlelist?curPage=2&limit=1

  - curPage : from 0
  - return : {
    {
    "id": 9,
    "author_id": 1,
    "title": "禁令即将生效！数千游客涌向乌鲁鲁！争相攀爬岩石！",
    "category": "澳洲新闻",
    "tag": "AD",
    "watchcnt": 0,
    "commentcnt": 0,
    "image_link": "https://brisbanebbs.com/data/attachment/forum/201910/02/171617lz3wz13s1aeozyli.jpg",
    "updatedAt": "2019-10-03T01:50:34.000Z"
    }
    }

- [update article by id] /:id/update
- {
  "entity": {
  "author_id": 1,
  "post_date": "2000-09-18 10:00:00",
  "title": "更新文章标题",
  "content": "文章内容更新",
  "status": "publish",
  "category": "交易平台"
  }
  }

- [getlist By Tag] /article/getarticlelist?curPage=2&limit=1&tag=AD

  - tag:根据 tag 获取文章列表
  - return : 同 getarticlelist 接口

2. CRUD the menus [https://www.myopal.xin/weapp]

- [get menus] /menu
- [get menus by father_id] /nav/find/where?father_id=1
- [update menu by id] /nav/update
  - {"update":{"icon_address":"http://..."},"where":{"id":11}}
- [update menu icon by id] /nav/:id/navPicture
- [post add menu] /nav/create
  - {
    "entity": {
    "category": "电信网络",
    "father_id":2,
    "a_id":2,
    "icon_address":"https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg",
    "createdAt":"2019-09-15 01:01:08",
    "updatedAt":"2019-09-15 01:01:08"
    }
    }

3. 增加文章和广告阅读数 接口

- weapp/article/:id/addCnt
  - {
    "data": {
    "field": "likecnt"
    }
    }
- weapp/adv/:id/addCnt
  - {
    "data": {
    "field": "likecnt"
    }
    }

# Steps

### 1. Bacic express server

- init the project and install express

  ```
  npm init --yes
  npm i
  git init
  git remote add origin https://github.com/polokang/ppshu-api.git
  ```

- From root, create a new file names `.gitignore`
- Create src folder and `src/server.js`

### 2. Install developer tools for fast develop

- `npm i express nodemon envdotjson helmet morgan cors winston winston-daily-rotate-file mariadb joi express-async-errors swagger-ui-express yamljs bcryptjs jsonwebtoken babel-plugin-transform-decorators-legacy babel-polyfill babel-register sequelize ali-oss multer`

## Run

> `npm run dev` for run local server

# issue

1. `process.env.PWD` can not get value in vscode debug mode. so need to change the logDirectory path in src/utils/logger.js.

2. fix upload file size limit.

- `"request entity too large" PayloadTooLargeError: request entity too large`
- `app.use(express.json({ limit: "50mb" }))` in server.js

3. 报错 `Client does not support authentication protocol requested by server` 的解决方法

- 登陆数据库 `mysql -uroot -p`
- 输入 root 的密码
- 更改加密方式 `ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;`
- 更改密码：该例子中 123456 为新密码 `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';`
- 刷新：`FLUSH PRIVILEGES;`

4. `Experimental support for decorators is a feature that is subject to change in a future release...`

- Open `settings.json`
- Place `"javascript.implicitProjectConfig.experimentalDecorators": true`

5. babel-node 调试 Configure

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/server.js",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/babel-node"
    }
  ]
}
```

6. pm2 下使用 babel

- 修改 ecosystem.config.js 中的 `NODE_ENV: "production"` 后, run `pm2 start ecosystem.config.js --interpreter babel-node`

7. 由于 bcrypt 目前(2019)不支持 Linux ， 所以将 bcrypt 替换成 bcryptjs

- 首页

  - 幻灯片（8 条可编辑）
  - 内部通知
  - 图片文字广告
  - 十条列表广告

- 二级页面

  - 专业服务
    - 求职招聘（编辑）
    - 会计服务
    - -美⻝

- 详情页面
  - 幻灯片（8 条可编辑）
