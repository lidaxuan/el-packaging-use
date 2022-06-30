/*
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-06-25 12:09:53
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-30 19:47:04
 * 用法：挂在到vue原型全局
 *
 * 就可以直接  this.$HttpNomal.labelAll().then(res=>{})
 */
// const isProduction = process.env.NODE_ENV === 'production'; //根据环境处理
// const isTest= process.env.NODE_ENV === 'test'; //根据环境处理
// const isDev= process.env.NODE_ENV === 'dev'; //根据环境处理
export const Env = {
  devLoginUrl: "//dev-app.easyliao.com/auth-sso/oauth/web/login/view",
  testLoginUrl: "//test.easyliao.com/auth-sso/oauth/web/login/view",
  prdLoginUrl: "//auth.easyliao.com/auth-sso/oauth/web/login/view",
};
export const iconLinkArr = [
  "//at.alicdn.com/t/font_2457021_n24vohm1ioh.js", //el-web-basic
  "//at.alicdn.com/t/font_2735677_2pk2ufxaaq2.js",
  "//at.alicdn.com/t/font_2735677_2pk2ufxaaq2.css",
];
export const Api = [
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
    localUrl: "/apis", //baseUrl
    devUrl: "/apis", //baseUrl
    testUrl: "/", //baseUrl
    proUrl: "/", //baseUrl
  },
  {
    name: "userInfo", //api下文件名
    http: "$HttpUserInfo", //this.$HttpNomal.labelAll().then(res=>{})
    localUrl: "/", //baseUrl
    devUrl: "/", //baseUrl
    testUrl: "/", //baseUrl
    proUrl: "/", //baseUrl
  },
];
export const apiBaseUrl = (type) => {
  let apis = {
    billing: {
      production: "/toll-collection-web",
      development: "/toll-collection-web"
    },
    bus: { production: "/boss-web", development: "/boss-web" },
    front: { production: '/boss-front', development: '/boss-front' },
    inner: { production: "/inner-admin", development: "/inner-admin" },
    robot: { production: "/eachbot-flow-web", development: "/eachbot-flow-web" }
  };
  if (type) {
    return apis[type][process.env.NODE_ENV];
  }
  return apis["bus"][process.env.NODE_ENV];
}

// exports.iconLinkArr = iconLinkArr;
// module.exports.iconLinkArr = iconLinkArr;
// exports.Api = Api;
// module.exports.Api = Api;
// exports.Env = Env;
// module.exports.Env = Env;
