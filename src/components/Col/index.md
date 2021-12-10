---
group:
  title: Row 和 Col
order: 2
---


通过 span 设置 Col 的占比

```tsx
import React from 'react';
import { Row, Col } from 'xiaowin-ui';
import './demo.less';

export default () => (
  <>
    <Row>
      <Col>
        <div className="demo">默认24</div>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <div className="demo">12</div>
      </Col>
      <Col span={12}>
        <div className="demo">12</div>
      </Col>
    </Row>
  </>
);
```


gutter 属性设置间隔

```tsx
import React from 'react';
import { Row, Col } from 'xiaowin-ui';
import './demo.less';

export default () => (
  <>
    <Row gutter={10}>
      <Col span={4}>
        <div className="demo-col">12</div>
      </Col>
      <Col span={12}>
        <div className="demo-col">12</div>
      </Col>
    </Row>

    <Row gutter={10}>
      <Col span={6}>
        <div className="demo-col">6</div>
      </Col>
      <Col span={6}>
        <div className="demo-col">6</div>
      </Col>
      <Col span={6}>
        <div className="demo-col">6</div>
      </Col>
      <Col span={6}>
        <div className="demo-col">6</div>
      </Col>
    </Row>
  </>
);
```
