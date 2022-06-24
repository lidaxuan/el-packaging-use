/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: web.范庆龙
 * @LastEditTime: 2020-04-26 10:45:43
 * @Description: file content
 */

import * as types from "../types";
const home = {
  state: {
    easyDetail: [
      {
        id: "8-8",
        icon: "icon-A-A2",
        name: "易聊营销生态链体系",
        level: "0-0",
        path: "./detail",
      },
    ],
    routeView: false,
  },
  mutations: {
    [types.ROUTEVIEW]: (state, routeView) => {
      state.routeView = routeView;
    },
  },
  actions: {
    setRouteView({ commit }, routeView = false) {
      commit(types.ROUTEVIEW, routeView);
    },
  },
};

export default home;
