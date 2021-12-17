<!--
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-15 17:21:11
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-16 18:09:32
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
-->

---

group:
title: Image 图片
order: 4

---

**基本使用**

```tsx
import React from 'react';
import { Image } from 'xiaowin-ui';

export default () => (
  <Image
    width={200}
    height={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
);
```

**加载失败占位图**

```tsx
import React from 'react';
import { Image } from 'xiaowin-ui';

export default () => (
  <Image
    width={200}
    height={200}
    error="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    src="xxx.png"
  />
);
```
