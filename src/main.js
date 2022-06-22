/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/main.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 10:08:13
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./service";

Vue.config.productionTip = false;

Vue.use(service);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
