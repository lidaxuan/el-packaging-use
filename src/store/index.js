import utils from "wb@/utils";
import getters from "./getters";
const files = require.context("./modules", false, /\.js$/);
import createPersistedState from "vuex-persistedstate";
import { createStore } from 'wb@/store'


const storeKey = 'el-packaging-use';
const storeConfig = {
  modules: utils.readFile(files),
  getters,
  plugins: [
    createPersistedState({
      key: storeKey,
      storage: window.sessionStorage, //选择 sessionStorage 进行存储
      // paths: []
    }),
    // createPersistedState({
    //   key: "xxx-web-view.L",
    //   storage: window.localStorage, //选择 localStorage 进行存储
    //   paths: ["layoutMenus", "user"]
    // })
  ]
};
export const store = createStore(storeConfig, storeKey);
