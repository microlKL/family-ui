# 工程架构说明

* 工程功能简述：对一些感觉不够友好的第三方开源组件进行二次封装，并发布到 npm 仓库，供有需要的网友开发使用，包括我自己的实际项目；该工程已发布到 npm 仓库进行测试使用(目前仅在测试，不推荐使用，当然也没啥可用的)，可在 npm 上搜索 family-ui 进行查询

* 注意：此工程中运行指令，请务必带上 npx，因为此工程的依赖都尽量使用非全局指令  
带上 npx 执行的指令将只从当前工程中的依赖包中去查找，不会受到全局环境的影响  
如：利用 mddir 生成当前工程的目录结构,则执行如下指令，然后查看当前工程根目录下的 directoryList.md 文件
```shell
npx mddir
```

* 工程可持续化部署  
此工程部署利用了 netlify （https://app.netlify.com/） 实现的可持续化部署。  
netlify 是依靠 github 等第三方代码库实现的可持续化部署功能，参考资料如下
部署参考资料  
（1）https://www.bookstack.cn/read/learnstorybook-react-zh/c3cf025a2098a79d.md  
（2）https://www.jianshu.com/p/1d47bea6e728  

## 1、工程中所有依赖库说明
* mddir ： 用于生成当前工程的目录结构,执行指令后，然后查看当前工程根目录下的 directoryList.md 文件即可  

。。。更多依赖库的说明，后续再添加。。。

## 2、框架搭建参考资料  
（实际配置和下面的网络资料有所不同，实际搭建时更多的是自主思考，要尽量了解每个配置属性的功能作用）

* 1、lerna + yarn workspace 实现 monorepo 项目管理   
（1）https://blog.csdn.net/i10630226/article/details/99702447

* 2、React + Storybook + Lerna 构建自己的前端UI组件库  
（1）https://blog.csdn.net/weixin_34310369/article/details/88008739

* 3、webpack4详细教程，从无到有搭建react脚手架  
（1）https://segmentfault.com/a/1190000019711348  
（2）https://segmentfault.com/a/1190000019711709  
（3）https://segmentfault.com/a/1190000019712092  
（4）https://segmentfault.com/a/1190000019712317  

## 3、框架
* 【整体工程框架】：lerna + yarn workspace 搭建 monorepo 项目，实现多包管理
* 【packages 目录下的包使用框架】：webpack + webpack cli 搭建 react 应用，使用 webpack 实现应用打包
* 【fluent-ui-packages 目录下的包使用框架】：使用 rollup 对 react 组件项目进行打包，该目录下的每个 package 都不提供单独运行，只提供打包功能，通过 rollup 编译并打包成原生 JS 后，可以给别的库进行直接使用，而无需解析，该目录下的每个 package 都相当于一个组件类库，每个组件包的具体使用方法，请查看其中的 README.md 说明文档


## 2、框架搭建流程记录

* 初始化操作
```shell
// 创建工程文件夹
md family-ui
cd family-ui

// git 初始化，git 链接远程仓库
git init
git remote add origin https://gitee.com/starFromGithub/family-ui.git

// npm 初始化,自动生成 package.json 文件
npm init

// 工程本地安装 lerna 
// (一定要 3.x 以上的，最好用最新的，3.0以下的 lerna 有些功能不具备,比如说不能 lerna create 来创建 package)
yarn add lerna

// 用工程本地 lerna 初始化（用 npx 执行工程内的依赖包指令），自动生成 lerna.json
npx lerna init

// 在工程根目录下创建两个包文件夹, 
// (1) fluent-ui-packages 用于放置 ui 组件项目
// (2) packages 用于放置开发 api 项目,即调用 fluent-ui-packages 中的组件，并编写每个组件相应的 API 使用案例说明页面
md packages
md fluent-ui-packages
```

* 修改工程根目录下的 lerna.json 配置

```javascript
{
    // 配置两个包目录，包目录在这里单独配置好还不够，还需要在 package.json 中进行相应的配置
  "packages": [
    "packages/*",
    "fluent-ui-packages/*"
  ],
  "version": "0.0.3",
  "npmClient": "yarn", // 使用 yarn
  "useWorkspaces": true // 开启 workspace 开关
}
```

* 修改工程根目录下的 package.json 配置

```javascript
{
  "name": "family-ui", // 工程名称，npm publish 发布时会使用该名称
  "version": "1.0.0", // 工程版本号，npm publish 每次发布前，必须递增，否则会发布失败
  "description": "", // 描述
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  // files 决定 npm publish 发布到 npm 仓库时输出的文件夹
  // 这里只需要将组件发布到 npm 仓库，所以只配置了以下目录
  "files": [
    "fluent-ui-packages"
  ],
  "keywords": [],
  "author": "",
  "license": "MIT", // 开源协议，目前暂时不了解其意义
  "devDependencies": {
    "commitizen": "^4.0.4",
    "cz-lerna-changelog": "^2.0.2",
    "lerna": "^3.20.2",
    "mddir": "^1.1.1"
  },
  "private": false, // 项目是否私有，npm publish 发布时，必须是 false，否则会发布失败；但是本地运行项目时，必须设置为 true，所以这个值会经常改动
  // 配置 workspace 工作空间的目录，这里就是上面 lerna.json 中提到的 "packages" 属性，要保持一致
  // 比如，如果这里没有设置 "fluent-ui-packages/*" 这个目录，那么在执行 lerna create a-package fluent-ui-packages 时，
  // 创建的 a-package 包会仍然在默认的第一个 packages 目录下创建，
  // 就算手动在 fluent-ui-packages 下创建 a-package 包，在执行 lerna add a-package --scope b-package 等相关的 lerna 指令时，也会爆出找不到 a-package，
  // 因为这里没配置这个 "fluent-ui-packages/*" 的情况下，lerna 也会找不到 fluent-ui-packages 这个目录下的任何包的
  "workspaces": [
    "packages/*",
    "fluent-ui-packages/*"
  ],
  // 主页链接，npm publish 发布到 npm 仓库时，会识别到这个表示，并显示在页面右侧
  // 当我们把组件开发好并将其中的 api 项目发布到自己的服务器上,方便他人在使用该组件库时，查看 api 进行开发
  "homepage":"https://www.micking.top:10000", 
  // 源码链接，npm publish 发布到 npm 仓库时，会识别到这个表示，并显示在页面右侧
  "repository": {
    "type": "git",
    "url": "https://gitee.com/starFromGithub/family-ui-webpack.git"
  }
}
```

## 发布组件到 npm 仓库

(特别提示：npm 仓库每天有发布次数的上限了，具体多少次我不知道，只是遇到了一天提交次数过多后，怎么发布，npm 仓库里的版本都不更新了，过了半夜12点，第二天那些后发布的版本就都出现了)  

参考资料  
https://juejin.im/entry/58a3caa686b599007391dfbe  

* 1、登录自己的 npm 账户
```shell
npm login
```
* 2、发布到 npm 仓库
```shell
npm publish
```

## 工程中为 package 添加依赖

* 在工程根目录下执行指令

```shell
// 为工程中所有 package 添加依赖包
npx lerna add <第三方依赖包>
// 比如
npx lerna add styled-components
```

```shell
// 指定为工程中某个 package（下面以 @family-ui/app-api 这个 package 为例） 添加第三方依赖包
npx lerna add <第三方依赖包> --scope @family-ui/app-api
// 比如
npx lerna add @storybook/react --scope @family-ui/app-api
```

```shell
// 工程内部 package 相互添加依赖
// 比如 将 fluent-ui-packages 目录下的 @family-ui/nav-flt 作为依赖包，添加到 @family-ui/app-api 中
npx lerna add @family-ui/nav-flt --scope @family-ui/app-api
```
