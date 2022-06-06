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
      <Button size="small">button 3</Button>
      <Button size="middle">button 1</Button>
      <Button size="large">button 4</Button>
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
    <Button type="primary">button 1</Button>
    <Button type="success">button 2</Button>
    <Button type="warning">button 4</Button>
    <Button type="danger">button 4</Button>
  </>
);
```

**链接按钮**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => <Button type="link">button 2</Button>;
```
