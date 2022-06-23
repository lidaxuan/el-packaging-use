/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/main.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 16:20:29
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./service";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base/index.scss';
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式

Vue.config.productionTip = false;

Vue.use(service);
Vue.use(ElementUI, { size: 'small' });

//自定义一个代码高亮指令

Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    console.log(block);
    hljs.highlightBlock(block)
  })
});

setTimeout(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}, 0);