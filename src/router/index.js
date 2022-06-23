/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/router/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 16:22:14
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: 'index',
    component: () =>
      import( /*webpackChunkName: "componentA"*/ '@/views/layout/Layout.vue'),
    redirect: {
      name: 'ImplementationComponent'
    },
    children: [
      {
        path: "/ImplementationComponent",
        name: "ImplementationComponent",
        component: () => import("@/views/ImplementationComponent/index")
      },
      {
        path: "/UiDesign",
        name: "UiDesign",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UiDesign"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
