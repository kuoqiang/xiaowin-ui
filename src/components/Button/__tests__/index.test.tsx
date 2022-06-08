/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-06 17:43:06
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-08 10:55:40
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button, { ButtonProps } from '..';
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  className: 'klass',
};

const disabledProps: ButtonProps = {
  onClick: jest.fn(),
};
describe('test Button component', () => {
  it('默认button测试', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('xiaowin-btn xiaowin-btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('测试button属性', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      'xiaowin-btn xiaowin-btn-primary xiaowin-btn-lg klass',
    );
  });
  it('测试link类型', () => {
    const wrapper = render(
      <Button type="link" href="http://dummyurl">
        Link
      </Button>,
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('xiaowin-btn xiaowin-btn-link');
  });
});
