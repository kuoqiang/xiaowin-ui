/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-07 10:59:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-07 10:59:31
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
