---
menus:
  title: 快速上手
---

# 快速上手

## 安装

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

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@zzzzw/happy-ui",
        "libraryDirectory": "esm", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```
