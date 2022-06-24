/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: web.范庆龙
 * @LastEditTime: 2020-04-26 10:45:43
 * @Description: file content
 */
import * as types from "../types";
import setting from "./setting";
const user = {
  state: {
    // 用户信息
    userMsg: {},
    token: null,
    // ui系统主题设置
    layoutSetting: setting.layoutSetting,
  },
  mutations: {
    [types.TOKEN]: (state, token) => {
      state.token = token;
    },
    [types.USERMSG]: (state, userMsg = {}) => {
      state.userMsg = userMsg;
    },

    [types.LAYOUTSETTING]: (state, layoutSetting = {}) => {
      state.layoutSetting = layoutSetting;
    },
  },
  actions: {
    setToken({ commit }, token = null) {
      commit(types.TOKEN, token);
    },
    setUserMsg({ commit }, userMsg = {}) {
      commit(types.USERMSG, userMsg);
    },

    // 主题设置
    setLayoutSetting({ commit }, layoutSetting = {}) {
      commit(types.LAYOUTSETTING, layoutSetting);
    },
  },
};

export default user;
