## 框架搭建参考资料（lerna + yarn workspace 实现 monorepo 项目管理）
1、https://segmentfault.com/a/1190000019711348  
2、https://segmentfault.com/a/1190000019711709  
3、https://segmentfault.com/a/1190000019712092  
4、https://segmentfault.com/a/1190000019712317  

## 发布组件到 npm 仓库参考资料
https://juejin.im/entry/58a3caa686b599007391dfbe  
* 1、登录自己的 npm 账户
```shell
npm login
```
* 2、发布到 npm 仓库
```shell
npm publish
```
不过，此工程用 lerna 管理，所以就利用 lerna 统一发布所有组件
```shell
npx lerna publish
```


* 注意：此工程中运行指令，请务必带上 npx，因为此工程的依赖都尽量使用非全局指令  
* 带上 npx 执行的指令将只从当前工程中的依赖包中去查找，不会受到全局环境的影响  

如：利用 mddir 生成当前工程的目录结构,则执行如下指令，然后查看当前工程根目录下的 directoryList.md 文件
```shell
npx mddir
```

## 工程中所有依赖库说明
* mddir ： 用于生成当前工程的目录结构,执行指令后，然后查看当前工程根目录下的 directoryList.md 文件即可

