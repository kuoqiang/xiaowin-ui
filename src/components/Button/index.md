---
group:
  title: Button 按钮
  order: 1
toc: false
footer: but重复造轮子本身就是一种乐趣
---

**基本使用**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => (
  <>
    <div>
      <Button>button 1</Button>
      <Button color="green">button 2</Button>
    </div>
    <div>
      <Button size="small">button 3</Button>
      <Button size="default">button 1</Button>
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
    <Button type="error">button 3</Button>
    <Button type="warning">button 4</Button>
  </>
);
```

**字体颜色**

```tsx
import React from 'react';
import { Button } from 'xiaowin-ui';

export default () => <Button color="green">button 2</Button>;
```
