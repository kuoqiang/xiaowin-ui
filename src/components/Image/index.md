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

**mask 遮罩(开发中)**

```tsx
import React from 'react';
import { Image } from 'xiaowin-ui';

export default () => (
  <Image
    width={200}
    height={200}
    mask="https://z3.ax1x.com/2021/09/30/4oUAiQ.png"
    src="https://z3.ax1x.com/2021/09/30/4oaTAO.jpg"
  />
);
```
