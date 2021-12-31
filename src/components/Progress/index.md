---
group:
  title: Progress 进度条
order: 5
---

**基本使用**

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from 'xiaowin-ui';

export default () => {
  const [progress, setProgress] = useState(0);
  let Timer;
  useEffect(() => {
    Timer = setInterval(() => {
      setProgress((progress) => {
        if (progress >= 1) {
          // clearInterval(Timer);
          return 0;
        } else {
          return progress + 0.2;
        }
      });
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  return (
    <>
      <Progress
        r="50"
        fill="none"
        strokeWidth="8"
        stroke="#7C83FD"
        donecolor="red"
        progress={progress}
        strokeLinecap="round"
        deg={-90}
      />
    </>
  );
};
```

**波浪滚动**

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from 'xiaowin-ui';
const { WaveProgress } = Progress;

export default () => {
  const [progress, setProgress] = useState(0);
  let Timer;
  useEffect(() => {
    Timer = setInterval(() => {
      setProgress((progress) => {
        if (progress >= 1) {
          // clearInterval(Timer);
          return 0;
        } else {
          return progress + 0.2;
        }
      });
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  return (
    <>
      <WaveProgress
        r="100"
        fill="none"
        strokeWidth="8"
        stroke="#7C83FD"
        donecolor="blue"
        progress={progress}
        strokeLinecap="round"
        deg={-90}
      />
    </>
  );
};
```

**API**

各类型共用的属性。

| 属性          | 说明             | 类型                          | 默认值        |
| ------------- | ---------------- | ----------------------------- | ------------- |
| r             | 圆的半径         | string                        | 0             |
| progress      | 进度百分比       | number \| string              | 0             |
| stroke        | 进度条的颜色     | string                        | `-`           |
| strokeLinecap | 进度条的样式     | `round` \| `square` \| `butt` | `round`       |
| donecolor     | 进度条完成颜色   | string                        | stroke 属性值 |
| trackline     | 是否显示线条轨迹 | string                        | true          |
| deg           | 线段起始位置     | number \| string              | -90           |
| strokeWidth   | 线条的宽度       | number                        | 0             |

**WaveProgress API**

| 属性     | 说明     | 类 型  | 默认值 |
| -------- | -------- | ------ | ------ |
| fontSize | 字体大小 | string | 24     |
| color    | 字体颜色 | string | #000   |
