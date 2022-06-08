---
group:
  title: Button 按钮
order: 2
toc: false
footer: but重复造轮子本身就是一种乐趣
---

**按钮大小**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => (
  <>
    <div>
      <Button type="primary" size="small">
        small
      </Button>
      <Button type="primary" size="middle">
        middle
      </Button>
      <Button type="primary" size="large">
        large
      </Button>
    </div>
  </>
);
```

**按钮类型**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => (
  <>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="primary" disabled>
      disabled
    </Button>
  </>
);
```

**链接按钮**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => (
  <>
    <Button type="link">link</Button>
    <Button type="link" disabled>
      link disabled
    </Button>
  </>
);
```

**API**
| 属性 | 说明 | 类型 | 默认值 |
| ------------- | ---------------- | ----------------------------- | ------------- |
| type | 按钮类型 | `primary` \| `default` \| `success`\| `danger` \| `warning` \| `link` | default |
| size | 按钮大小 | `large` \| `small` \| `middle` | middle |
| disabled | 是否禁用 | `boolean` | false |
| href | 链接地址 `type为link时生效` | `string` | `undefined` |
