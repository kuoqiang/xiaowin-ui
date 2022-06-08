/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2022-06-07 10:21:14
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-08 09:51:02
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^src$': '<rootDir>/src/index.tsx',
    '^src(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
