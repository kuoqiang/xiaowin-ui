/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-29 17:04:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-02-15 16:17:55
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
import React from 'react';
import './index.scss';

export default ({
  gutter = 0,
  children,
}: {
  gutter: Number;
  children: any;
}) => {
  let style = {
    marginLeft: -gutter / 2,
    marginRight: -gutter / 2,
  };
  return (
    <div className="xiaowin-row" style={style}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          gutter: gutter,
        });
      })}
    </div>
  );
};
