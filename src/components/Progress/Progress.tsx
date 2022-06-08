/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-16 18:00:12
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-31 15:51:02
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC, useState, useEffect } from 'react';
import './index.scss';
import classnames from 'classnames';

const PI = 314;

export interface ProgressProps {
  r: string | number;
  strokeWidth: string | number;
  fill: string;
  stroke: string;
  progress?: string | number;
  strokeLinecap: 'butt' | 'round' | 'square';
  deg?: number | string;
  donecolor: string;
  trackline: boolean;
}

const Progress: FC<ProgressProps> = (prop) => {
  let cr = Number(prop.r) + Number(prop.strokeWidth);
  let Circumference = PI * (Number(prop.r) / 50);
  let classNames = classnames({
    'xiaowin-svg': true,
    // [`xiaowin-svg-linecap_${prop.strokeLinecap}`]: prop.strokeLinecap
  });

  let trackline = true;
  if ('trackline' in prop) trackline = prop.trackline;

  let options = {
    ...prop,
    cx: cr,
    cy: cr,
    strokeDasharray: Circumference,
    strokeDashoffset: (
      (Number(1) - Number(prop.progress)) *
      Circumference
    ).toFixed(2),
    transform: `rotate(${prop.deg || -90} ${cr} ${cr})`,
  };
  if (Number(options.progress) >= 1) {
    options.stroke = options.donecolor || '#52c41a';
  }
  delete options?.progress;
  delete options?.deg;

  return (
    <svg width={2 * cr} height={2 * cr}>
      {trackline == true && (
        <circle
          className={classNames}
          fill="none"
          r={prop.r}
          strokeDasharray={Circumference}
          strokeWidth={prop.strokeWidth}
          cx={cr}
          cy={cr}
          stroke="#eee"
        ></circle>
      )}
      <circle className={classNames} {...options}></circle>
      <text
        x={cr}
        y={cr}
        fill="#6b778c"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        <tspan>{Number(Number(prop.progress).toFixed(2)) * 100}</tspan>
        <tspan>%</tspan>
      </text>
    </svg>
  );
};

// Progress.FloatProgress = FloatProgress;

export default Progress;
