/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 16:43:09
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-13 18:02:26
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
import { defineConfig } from 'dumi';
let BaseUrl = '/xiaowin-ui';

export default defineConfig({
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'xiaowin-ui',
  favicon: BaseUrl + '/images/favicon.ico',
  logo: BaseUrl + '/images/logo1.png',
  outputPath: 'doc-site',
  base: '/xiaowin-ui/',
  publicPath: '/xiaowin-ui/',
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
      path: 'https://github.com/1061603885/xiaowin-ui',
    },
  ],
});
