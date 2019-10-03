# ppshu-api

# API

1. CRUD a articles

- [add article] /article/create

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
    "tag":"交易平台"
    }
    }

- [get all article] /article
- [get article list] /article/getarticlelist?curPage=2&limit=1

  - curPage : from 0
  - return : {
    "id": 2,
    "author_id": 2,
    "title": "文章标题 2",
    "category": "交易平台",
    "tag": null,
    "watchcnt": 0,
    "commentcnt": 0,
    "image_link": null,
    "updatedAt": "2019-09-21T13:15:39.000Z"
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

2. CRUD the menus [https://www.myopal.xin/weapp]

- [get menus] /menu
- [get menus by father_id] /nav/find/where?father_id=1
- [update menu by id] /nav/update
  - {"update":{"icon_address":"http://..."},"where":{"id":11}}
- [update menu icon by id] /nav/:id/navPicture

3.

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

- `npm i express nodemon envdotjson helmet morgan cors winston winston-daily-rotate-file mariadb joi express-async-errors swagger-ui-express yamljs bcrypt jsonwebtoken babel-plugin-transform-decorators-legacy babel-polyfill babel-register sequelize ali-oss multer`

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
