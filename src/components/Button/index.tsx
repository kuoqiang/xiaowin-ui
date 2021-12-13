/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 17:52:40
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-13 15:45:19
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC } from 'react';
import './index.scss';
import classnames from 'classnames';

interface Props {
  color?: string;
  children: FC;
  type: string;
  style: Object;
}

const Button: FC<Props> = ({
  children,
  color,
  type = 'default',
  style = {},
}: Props) => {
  let classNames = classnames({
    'xiaowin-button': true,
    [`xiaowin-button_${type}`]: true,
  });
  return (
    <button className={classNames} style={{ color: color, ...style }}>
      {children}
    </button>
  );
};

export default Button;
