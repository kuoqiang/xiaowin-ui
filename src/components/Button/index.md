---
group:
  title: Button 按钮
  order: 1
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
