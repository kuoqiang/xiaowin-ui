/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-07 16:57:46
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-08 14:46:04
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
import React, { FC, useState } from 'react';
import classNames from 'classnames';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined;

const AlertTypeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};

interface BaseAlertProps {
  type?: AlertType;
  closable?: Boolean;
  closeNode?: React.ReactNode;
  children: React.ReactNode;
  onClose?: any;
  autoClose?: Boolean;
  closeIcon?: React.ReactNode;
}

export type AlertProps = Partial<BaseAlertProps>;

const Alert: FC<AlertProps> = (props) => {
  const [close, setClose] = useState(false);
  const { type, children, closable, closeNode, autoClose, closeIcon } = props;
  const AlertTypeCls = type ? AlertTypeMap[type] || 'info' : 'info';
  const ClassNames = classNames('xiaowin-alert', {
    [`xiaowin-alert-${AlertTypeCls}`]: AlertTypeCls,
  });
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (autoClose) {
      setClose(true);
    }
    props.onClose?.(e, setClose);
  };
  const renderClose = () =>
    closable ? (
      <button
        type="button"
        onClick={handleClose}
        className="xiaowin-close-icon"
      >
        {closeNode ? (
          <span className="xiaowin-close-Node">{closeNode}</span>
        ) : (
          closeIcon
        )}
      </button>
    ) : null;
  return !close ? (
    <div className={ClassNames}>
      <div style={{ flex: 1 }}>{children}</div>
      {renderClose()}{' '}
    </div>
  ) : (
    <></>
  );
};

Alert.defaultProps = {
  type: 'info',
  closable: false,
  autoClose: true,
  closeIcon: <CloseOutlined />,
};

export default Alert;
