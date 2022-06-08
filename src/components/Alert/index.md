---
group:
  title: Alert 警告
order: 1
toc: false
footer: but 重复造轮子本身就是一种乐趣
---

**类型**

```tsx
import React from 'react';
import { Alert } from 'xiaowin-ui';

export default () => (
  <>
    <Alert type="success">success</Alert>
    <Alert type="info">info</Alert>
    <Alert type="warning">warning</Alert>
    <Alert type="error">error</Alert>
  </>
);
```

**close**

```tsx
import React from 'react';
import { Alert } from 'xiaowin-ui';

export default () => (
  <>
    <Alert type="success" closable={true}>
      success
    </Alert>
    <Alert
      type="success"
      closable={true}
      closeNode={<div>自定义icon</div>}
      autoClose={false}
      onClose={(e, setClose) => {
        setClose(true);
      }}
    >
      success
    </Alert>
  </>
);
```

**API**
| 属性 | 说明 | 类型 | 默认值 |
| ------------- | ---------------- | ----------------------------- | ------------- |
| type | 警告类型 | `success` \| `warning` \| `info`\| `error` | `info` |
| closable | 是否显示关闭按钮 | `boolean` | false |
| autoClose | 点击 close 是否立即关闭 | `boolean` | true |
| closeIcon | 自定义 closeIcon | `ReactNode` | `<CloseOutlined />` |
