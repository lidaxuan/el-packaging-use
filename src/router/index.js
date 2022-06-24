/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/router/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 18:56:50
 */
import { createRouter } from 'web_beacon';


export const routes = [
  {
    path: "/",
    name: 'index',
    component: () =>
      import( /*webpackChunkName: "componentA"*/ '../views/baseStyle/index.vue'),
  },
  {
    path: "/asdasd",
    name: 'asdasd',
    component: () =>
      import( /*webpackChunkName: "componentA"*/ '../views/baseStyle/index.vue'),
  },
  {
    path: "/text",
    name: 'text',
    component: () =>
      import( /*webpackChunkName: "componentA"*/ '../views/home/test.vue'),
    // redirect: {
    //   name: 'ImplementationComponent'
    // },
    // children: [
    //   {
    //     path: "/ImplementationComponent",
    //     name: "ImplementationComponent",
    //     component: () => import("@@/views/ImplementationComponent/index")
    //   },
    //   {
    //     path: "/UiDesign",
    //     name: "UiDesign",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../views/UiDesign"),
    //   },
    // ]
  },
];

export const router = createRouter(routes);
