/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 17:52:40
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-03 17:30:05
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */



import React, { FC } from 'react';
import "./index.scss"

interface Props {
    color?: string,
    children: FC
}

const Button: FC<Props> = ({ children, color = "white" }: Props) => {
    let classname = `xiaowin-button`
    return <button className={classname} style={{ color: color }}>{children}</button>
};



export default Button
