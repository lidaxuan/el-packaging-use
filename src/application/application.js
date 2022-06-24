/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-23 09:40:50
 * @FilePath: /el-packaging-use/src/application/application.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 18:58:21
 */
/*
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2021-08-13 11:43:45
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-23 09:26:07
 * @FilePath: /web_beacon/src/main.js
 */
import Vue from "vue";
import App from "../App.vue";
import router from "../router";
import store from "../store";
import ElWebBasic from "el-web-basic";
import directives from "../directives";
import "../assets/base/reset/index.scss";
import "../assets/style/element-variables.scss";
import "../assets/base/common/layoutColor.scss";
import "../assets/index";
import IconClass from "../components/icon/IconClass";
import IconSvg from "../components/icon/IconSvg";
// import EMarkdownSp from '@/components/markdown/index.vue';
// import EAttributesTableSp from '@/components/markdown/EAttributesTableSp.vue';
// import 'highlight.js/styles/github.css';
// import 'github-markdown-css';
import service from "../service";
// import 'wb@/assets/base/common/index.scss'

Vue.use(directives);
Vue.use(ElWebBasic);
Vue.use(service);
Vue.config.productionTip = false;
Vue.prototype.hasAuthority = function (authorities) {
  return authorities.split(",").some((item) => {
    return store.state.menus.authCodeArr.includes(item);
  });
};
// icon组件挂载全局
// Vue.component('draggable', vuedraggable)
Vue.component("icon-class", IconClass);
Vue.component("icon-svg", IconSvg);
// Vue.component('e-markdown-sp', EMarkdownSp)
// Vue.component('e-attributes-table-sp', EAttributesTableSp)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");