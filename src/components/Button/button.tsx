/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 17:52:40
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-06 17:30:09
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';
export type ButtonType =
  | 'primary'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'link'
  | undefined;
export type ButtonSize = 'large' | 'small' | 'middle' | undefined;

const ButtonTypeMap = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  link: 'link',
  default: 'default',
};

const ButtonSizeMap = {
  large: 'lg',
  small: 'sm',
  middle: undefined,
};

interface BaseButtonProps {
  color: string;
  children: React.ReactNode;
  type?: ButtonType;
  style: Object;
  size: ButtonSize;
  className: string;
  disabled: Boolean;
  href: string;
}

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const { type, className, disabled, size, children, href, ...restProps } =
    props;
  const ButtonTypeCls = type ? ButtonTypeMap[type] || 'default' : '';
  const ButtonSizeCls = size ? ButtonSizeMap[size] : undefined;

  const ClassNames = classnames('xiaowin-btn', className, {
    [`xiaowin-btn-${ButtonTypeCls}`]: ButtonTypeCls,
    [`xiaowin-btn-${ButtonSizeCls}`]: ButtonSizeCls,
  });

  if (type === 'link') {
    return (
      <a className={ClassNames} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={ClassNames} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'middle',
};

export default Button;
