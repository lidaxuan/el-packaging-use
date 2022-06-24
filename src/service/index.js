import axios from "axios";
import { Api, iconLinkArr } from "./baseUrl";
import { serveApi } from "./request";
import utils from "wb@/utils";

let apiArr = [];
Api.forEach((item) => {
  let instance = {};
  instance.http = item.http;
  instance.fun = serveApi(
    axios.create({
      baseURL: window.__sso ? item[window.__sso + "Url"] : item.localUrl,
      timeout: 600000, // 请求超时时间
    }),
    item.name
  );
  apiArr.push(instance);
});
export default {
  install(Vue) {
    apiArr.forEach((item) => {
      Vue.prototype[item.http] = item.fun;
    });
    utils.addLinkArr(iconLinkArr); //加载iconurl
  },
};
