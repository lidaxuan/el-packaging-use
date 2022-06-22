/*
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-06-25 12:09:53
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 10:18:57
 * 用法：挂在到vue原型全局
 *
 * 就可以直接  this.$HttpNomal.labelAll().then(res=>{})
 */
// const isProduction = process.env.NODE_ENV === 'production'; //根据环境处理
// const isTest= process.env.NODE_ENV === 'test'; //根据环境处理
// const isDev= process.env.NODE_ENV === 'dev'; //根据环境处理
// icon 库集合
const iconLinkArr = [],
  Env = {
    prdLoginUrl: "//auth.easyliao.com/auth-sso/oauth/web/login/view"
  },
  Api = [
    {
      name: "nomal", //api下文件名
      http: "$HttpNomal", //this.$HttpNomal.labelAll().then(res=>{})
      localUrl: "/apis", //baseUrl
      devUrl: "/", //baseUrl
      testUrl: "/", //baseUrl
      proUrl: "/" //baseUrl
    },
  ],
  apiBaseUrl = (type) => {
    let apis = {
      billing: {
        production: "/toll-collection-web",
        development: "/toll-collection-web"
      },
      bus: { production: "/boss-web", development: "/boss-web" },
      front: { production: '/boss-front', development: '/boss-front' },
      inner: { production: "/inner-admin", development: "/inner-admin" }
    };
    if (type) {
      return apis[type][process.env.NODE_ENV];
    }
    return apis["bus"][process.env.NODE_ENV];
  };

exports.iconLinkArr = iconLinkArr;
module.exports.iconLinkArr = iconLinkArr;

exports.Api = Api;
module.exports.Api = Api;

exports.Env = Env;
module.exports.Env = Env;

exports.apiBaseUrl = apiBaseUrl;
module.exports.apiBaseUrl = apiBaseUrl;
