/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-06 17:43:06
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-08 10:54:48
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Alert, { AlertProps } from '..';

describe('test Button component', () => {
  it('默认alert测试', () => {
    const wrapper = render(<Alert>alert</Alert>);
    const element = wrapper.getByText('alert') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('DIV');
    expect(element).toHaveClass('xiaowin-alert xiaowin-alert-info');
  });
});
