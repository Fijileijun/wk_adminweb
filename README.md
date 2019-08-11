# NgRouter后台管理系统

## 项目安装依赖
```
npm install
```

### 本地环境运行
```
npm run start
```

### 编译打包生产，
```
npm run build
```

###  config/index，目前提供制定restfulapi的功能，可以根据不同环境，制定不同的api域名和端口

```

var path = require('path')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  build: {
    restfulApi:'http://product.api.com',
    mode: NODE_ENV,
    sourceMap: false,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    bundleAnalyzerReport: process.env.analyz
  },
  dev: {
    restfulApi:'http://dev.api.com',
    mode: NODE_ENV,
    sourceMap: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 3000,
    autoOpenBrowser: true,
    overlay: true,
    historyApiFallback: true,
    noInfo: true
  },
}


```

###  提供在服务器上pm2启动项目的功能

```
1.修改业务代码
2.配置生产restfulapi。配置一次即可。
    var path = require('path')
    const NODE_ENV = process.env.NODE_ENV

    module.exports = {
      build: {
        restfulApi:'http://product.api.com',
        mode: NODE_ENV,
        sourceMap: false,
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        bundleAnalyzerReport: process.env.analyz
      },
      dev: {
        restfulApi:'http://dev.api.com',
        mode: NODE_ENV,
        sourceMap: 'source-map',
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        port: 3000,
        autoOpenBrowser: true,
        overlay: true,
        historyApiFallback: true,
        noInfo: true
      },
    }
3.本地打包编译。
    npm run build
4.推送代码到远程仓库
    git push origin xxx
5.服务器用pm2起node服务
    npm run pm2_start
6.服务器ip+端口访问，如有需要自行配置ngnix做域名解析
```













