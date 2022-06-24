/*
 * @Author: 段丽军
 * @Date: 2021-12-30 09:58:49
 * @LastEditTime: 2022-04-19 20:57:13
 * @LastEditors: 段丽军
 * @Description:
 * @FilePath: /web_beacon/src/router/modules/baseStyle/index.js
 */
export default [
  {
    path: "/text",
    name: "text",
    component: () =>
    import(/* webpackChunkName: "BaseStyle" */ "@/views/baseStyle/index.vue"),
    meta: {
      title: "文字样式",
      keepAlive: true //缓存组件
    }
  },
  {
    path: "/border",
    name: "border",
    component: () =>
      import(/* webpackChunkName: "BaseStyle" */ "@/views/baseStyle/index.vue"),
    meta: {
      title: "边框导角",
      keepAlive: true //缓存组件
    }
  },
  {
    path: "/shadow",
    name: "shadow",
    component: () =>
      import(/* webpackChunkName: "BaseStyle" */ "@/views/baseStyle/index.vue"),
    meta: {
      title: "阴影样式",
      keepAlive: true //缓存组件
    }
  },
  {
    path: "/head",
    name: "head",
    component: () =>
      import(/* webpackChunkName: "BaseStyle" */ "@/views/baseStyle/index.vue"),
    meta: {
      title: "头像样式",
      keepAlive: true //缓存组件
    }
  }
];
