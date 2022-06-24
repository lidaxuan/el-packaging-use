/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 16:19:46
 * @Description: file content
 */
import Vue from "vue";
import Vuex from "vuex";
import utils from "wb@/utils";
import getters from "./getters";
const files = require.context("./modules", false, /\.js$/);
import createPersistedState from "vuex-persistedstate";
import { createStore } from 'wb@/store'
// Vue.use(Vuex);

// export function createStore() {
//   const store = new Vuex.Store({
//     modules: utils.readFile(files),
//     getters,
//     plugins: [
//       createPersistedState({
//         key: "S",
//         storage: window.sessionStorage, //选择 sessionStorage 进行存储
//         paths: []
//       }),
//       createPersistedState({
//         key: "xxx-web-view.L",
//         storage: window.localStorage, //选择 localStorage 进行存储
//         paths: ["layoutMenus", "user"]
//       })
//     ]
//   });
//   return store
// }

export const store = createStore();
// export default store;
