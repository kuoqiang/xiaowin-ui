---
group:
  title: SVGAnimate SVG动画
order: 5
---

**基本使用**

```tsx
import React, { useState, useEffect } from 'react';
import { SVGAnimate } from 'xiaowin-ui';

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
      <SVGAnimate
        r="50"
        fill="none"
        strokeWidth="8"
        stroke="#7C83FD"
        doneColor="red"
        progress={progress}
        strokeLinecap="round"
        deg={-90}
      />
    </>
  );
};
```
