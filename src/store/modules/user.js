/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:13:46
 * @Description: file content
 */
import * as types from '../types';

const user = {
  state: {
    // 用户信息
    userMsg: {},
    token: '',
    textRobot: {} //机器人信息
  },
  mutations: {
    [types.TOKEN]: (state, token) => {
      state.token = token;
    },
    [types.USERMSG]: (state, userMsg) => {
      state.userMsg = userMsg;
    },
    [types.TEXTROBOT]: (state, textRobot) => {
      state.textRobot = textRobot;
    },
    SET_LOGOUT(state) {
      state.token = "";
    }
  },
  actions: {
    LogOut({ commit }) {
      commit('SET_LOGOUT');
    },
    setToken({ commit }, token = '') {
      commit(types.TOKEN, token);
    },

    setUserMsg({ commit }, userMsg = {}) {
      commit(types.USERMSG, userMsg);
    },
    setTextRobot({ commit }, textRobot = {}) {
      commit(types.TEXTROBOT, textRobot);
    }
  }
};

export default user;