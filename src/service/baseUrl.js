/*
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-06-25 12:09:53
 * @LastEditors: web.duanzhaozhao
 * @LastEditTime: 2020-11-26 11:05:48
 * 用法：挂在到vue原型全局
 *
 * 就可以直接  this.$HttpNomal.labelAll().then(res=>{})
 */
// const isProduction = process.env.NODE_ENV === 'production'; //根据环境处理
// const isTest= process.env.NODE_ENV === 'test'; //根据环境处理
// const isDev= process.env.NODE_ENV === 'dev'; //根据环境处理
const Env = {
  devLoginUrl: "//dev-app.easyliao.com/auth-sso/oauth/web/login/view",
  testLoginUrl: "//test.easyliao.com/auth-sso/oauth/web/login/view",
  prdLoginUrl: "//auth.easyliao.com/auth-sso/oauth/web/login/view",
};
const iconLinkArr = [
  "//at.alicdn.com/t/font_2457021_n24vohm1ioh.js", //el-web-basic
  "//at.alicdn.com/t/font_2735677_2pk2ufxaaq2.js",
  "//at.alicdn.com/t/font_2735677_2pk2ufxaaq2.css",
];
const Api = [
  {
    name: "icon", //api下文件名
    http: "$HttpIcon", //this.$HttpNomal.labelAll().then(res=>{})
    localUrl: "//at.alicdn.com/t/font_2735677_mrkj6fh5qz.json", //baseUrl
    devUrl: "//at.alicdn.com/t/font_2735677_mrkj6fh5qz.json", //baseUrl
    testUrl: "//at.alicdn.com/t/font_2735677_mrkj6fh5qz.json", //baseUrl
    proUrl: "//at.alicdn.com/t/font_2735677_mrkj6fh5qz.json", //baseUrl
  },
  {
    name: "nomal", //api下文件名
    http: "$HttpNomal", //this.$HttpNomal.labelAll().then(res=>{})
    localUrl: "/default/boss-web", //baseUrl
    devUrl: "/boss-web", //baseUrl
    testUrl: "/", //baseUrl
    proUrl: "/", //baseUrl
  },
];
exports.iconLinkArr = iconLinkArr;
module.exports.iconLinkArr = iconLinkArr;
exports.Api = Api;
module.exports.Api = Api;
exports.Env = Env;
module.exports.Env = Env;
