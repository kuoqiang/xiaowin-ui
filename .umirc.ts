/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 16:43:09
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-11-23 11:32:47
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
import { defineConfig } from 'dumi';
let BaseUrl = '';

export default defineConfig({
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'xiaowin-ui',
  favicon: BaseUrl + '/images/favicon.ico',
  logo: BaseUrl + '/images/logo1.png',
  outputPath: 'docs-site',
  description: '小win的个人react组件库',
  navs: [
    {
      title: '帮助',
      path: '/help',
    },
    {
      title: '快速上手',
      path: '/getting-started',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: '/help',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/cpmponents': [
      {
        title: 'Button (按钮)',
        path: '/components/Button',
      },
    ],
  },
});
