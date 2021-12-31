/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-28 11:37:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-31 15:21:45
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React from 'react';

export const FloatProgress = function (props: any) {
  return (
    <div
      className="xiaowin-floatProgress"
      style={{
        width: props.r * 2 || 200,
        height: props.r * 2 || 200,
        border: `5px solid ${props.stroke || 'rgb(118, 218, 255)'}`,
      }}
    >
      <div
        className="wave"
        style={{
          backgroundColor: props.stroke || 'rgb(118, 218, 255)',
        }}
      >
        <div
          className="rotate1"
          style={{
            top: `${-props.progress * 100}%`,
          }}
        ></div>
        <div
          className="rotate2"
          style={{
            top: `${-props.progress * 100}%`,
          }}
        ></div>
        <span
          className="text"
          style={{
            fontSize: props.fontSize || '24px',
            color: props.color || '#000',
          }}
        >
          {props.progress.toFixed(2) * 100 || 0}%
        </span>
      </div>
    </div>
  );
};
