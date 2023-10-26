<!--
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 16:43:09
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-13 18:06:11
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
-->

### 文档地址放在开头

[文档传送门](https://kuoqiang.github.io/xiaowin-ui/)

**使用 npm 或 yarn 安装**

```shell
npm install xiaowin-ui
```

```shell
yarn add xiaowin-ui
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { Button } from 'xiaowin-ui'; // 与上述示例等价

ReactDOM.render(<Button type="primary">按钮</Button>, mountNode);
```

安装 `babel-plugin-import`

```
yarn add babel-plugin-import --dev
```

配置`.babelrc` 或 `babel-loader`

```javascript
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@xiaowin-ui",
        "libraryDirectory": "esm", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```
