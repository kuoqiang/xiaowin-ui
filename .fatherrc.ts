/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 16:43:09
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-11-22 17:59:26
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
export default {
  target: 'browser',
  esm: {
    // rollup
    type: 'babel',
    // file: 'dist',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  // cssModules: true,
  extractCSS: false,
  lessInBabelMode: true,
  entry: ['src/Button/index.tsx', 'src/Foo/index.tsx'],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  pkgs: [
    // 组件依赖构建顺序
  ],
};