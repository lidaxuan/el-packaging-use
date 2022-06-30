/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/main.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-30 19:36:15
 */
import Vue from "vue";
import App from "./App.vue";
import { createApp, createService } from 'web_beacon';
import { router } from "./router";
import { store } from "./store";
// import utilsApi from '@/api/utilsApi';
// console.log(utilsApi);
import ApiMap from '@/api';
import { Api, iconLinkArr, apiBaseUrl } from "@/service/baseUrl";
const service = createService(Api, ApiMap, iconLinkArr, apiBaseUrl);


import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
// import './assets/base/index.scss';
// import hljs from 'highlight.js' //导入代码高亮文件
// import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式


Vue.config.productionTip = false;

// Vue.use(service);
// Vue.use(ElementUI, { size: 'small' });

//自定义一个代码高亮指令

const config = {
  appName: '项目名称',
  welcomeMessage: "欢迎登录xxxxxx管理系统",
  pageTitle: "xxxx系统",
  appId: "10000",
  MenuListApi: {
    url: '/menu/list',
    methods: 'get'
  }
}

createApp(App, router, store, service, config);