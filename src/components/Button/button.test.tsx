/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-06 17:43:06
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-06 18:03:40
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './button';
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    // expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON');
    // expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
