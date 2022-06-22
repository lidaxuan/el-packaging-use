/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 10:16:59
 * @FilePath: /el-packaging-use/.eslintrc.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 10:19:42
 */
/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-13 14:32:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 09:56:14
 * @FilePath: /vue-project1/.eslintrc.js
 */
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    "async_com": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "html"
  ],
  "settings": {
    "html/html-extensions": [".vue"]
  },
  "rules": {
    "no-useless-escape": "off",
    "no-console": "off",
    "semi": [
      2,
      "always"
    ], // 分号前后空格
    "indent": [
      "error",
      2
    ],
    "space-infix-ops": [
      "error"
    ],
    "multiline-ternary": [
      "error",
      "never"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "eqeqeq": 0,
    "no-obj-calls": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-shadow": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ]
  }
}