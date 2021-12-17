/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-16 18:00:12
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-17 18:25:03
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC, useState, useEffect } from 'react';
import './index.scss';
import classnames from 'classnames';

const PI = 314;

interface Props {
  r: string | number;
  strokeWidth: string | number;
  fill: string;
  stroke: string;
  progress?: number | string;
  strokeLinecap: 'butt' | 'round' | 'square';
  deg?: number | string;
}

const SVGAnimate: FC<Props> = (prop: Props) => {
  let cr = Number(prop.r) + Number(prop.strokeWidth);
  let Circumference = PI * (Number(prop.r) / 50);
  let classNames = classnames({
    'xiaowin-svg': true,
    // 'xiaowin-svg-linecap': prop.linecap
  });

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
  if (options.progress >= 1) {
    options.stroke = options.doneColor || 'green';
  }
  delete options?.progress;
  delete options?.deg;

  return (
    <svg width={2 * cr} height={2 * cr}>
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

export default SVGAnimate;
