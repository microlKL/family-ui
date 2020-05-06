# `@family-ui/nav-flt`

## rollup 打包配置说明
参考资料  
http://www.fly63.com/article/detial/4534  

### 1、选择 rollup 打包原因

这里加入了 rollup 进行打包，webpack 和 rollup 的区别，在于 webpack 适合对应用进行打包，而 rollup 适合对类库进行打包，那该 package 是一个组件包，属于一个类库，所以就选择使用 rollup 进行打包

#### 1.1、修改组件的必要操作
* 此组件每次修改完后，一定先要修改该目录下 package.json 中的 version ，追加相应的版本号
* 然后在该目录下执行 yarn build 指令进行打包输出，执行成功后，会在该目录下生成一个 lib 文件夹，这个就是将 ES6 进行转换为原生 JS 的文件。这样一来别的地方引用该组件只需要引入 lib 中的 index.js 即可成功使用该组件了（外界其他 package 引入该组件包时，无需再进行语法解析了）

#### 1.2、其他 package 如何引用该组件
案例如下
```javascript
import React from 'react';
import NavFlt from '@family-ui/nav-flt/lib/index.js';

export default function ButtonEx(){
    return (
        <div>
            <NavFlt />
        </div>
    )
}
```

