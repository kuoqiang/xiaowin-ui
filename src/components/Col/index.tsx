/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-29 17:04:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-01 15:48:54
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
import React from 'react'
import "./index.scss"

export default ({ span = 24, children, gutter, offset = 0 }: { span: number, children: React.FC, gutter: number, offset: number }) => {
    let className = `xiaowin-col xiaowin-col-${span} xiaowin-col-offset-${offset}`
    console.log(gutter)
    let style = {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2
    }
    return <div style={style} className={className}>
        {children}
    </div>
}



