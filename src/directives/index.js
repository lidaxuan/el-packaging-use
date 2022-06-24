/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 18:17:24
 * @FilePath: /web_beacon/src/directives/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 09:43:19
 */
import utils from "wb@/utils";

const vueFiles = require.context("./src", true, /\.js$/);
const directives = utils.readFile(vueFiles);
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
