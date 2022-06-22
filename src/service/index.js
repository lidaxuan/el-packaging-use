import axios from "axios";
import { Api, iconLinkArr /*iconFontFaceArr*/ } from "./baseUrl";
import { serveApi } from "./request";
import utils from "@/utils";

// const isProduction = process.env.NODE_ENV === 'production'; //根据环境处理
// const isTest = process.env.NODE_ENV === 'test'; //根据环境处理
// const isDev = process.env.NODE_ENV === 'dev'; //根据环境处理
// const islocal= process.env.NODE_ENV === 'local'; //根据环境处理
let apiArr = [];
Api.forEach((item) => {
  let instance = {};
  instance.http = item.http;
  instance.fun = serveApi(
    axios.create({
      baseURL: window.__sso ? item[window.__sso + "Url"] : item.localUrl,
      timeout: 600000 // 请求超时时间
    }),
    item.name
  );
  apiArr.push(instance);
});

export default {
  apiArr,
  install(Vue) {
    apiArr.forEach((item) => {
      Vue.prototype[item.http] = item.fun;
    });
    // addFontFace()
    utils.addLinkArr(iconLinkArr); //加载iconurl
  }
};
