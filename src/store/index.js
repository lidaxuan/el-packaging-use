/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:15:37
 * @Description: file content
 */
import Vue from 'vue';
import Vuex from 'vuex';
import menus from './modules/menus';
import user from './modules/user';
import getters from './getters';

import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    menus,
    user
  },
  getters,
  plugins: [createPersistedState({
    key: 'textbot-web',
    storage: window.sessionStorage //选择sessionStorage 进行存储
    // paths:['menus','user']
  })]
});

export default store;
