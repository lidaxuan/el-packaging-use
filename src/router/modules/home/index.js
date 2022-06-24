/*
 * @Author: 段丽军
 * @Date: 2021-12-30 09:58:49
 * @LastEditTime: 2022-04-19 20:59:23
 * @LastEditors: 段丽军
 * @Description:
 * @FilePath: /web_beacon/src/router/modules/home/index.js
 */
export default [
  {
    path: "/newMenu",
    name: "newMenu",
    component: () =>
      import(/* webpackChunkName: "NewMenu" */ "@/views/home/NewMenu.vue"),
    meta: {
      title: "主推框架",
      keepAlive: true //缓存组件
    }
  }
];
