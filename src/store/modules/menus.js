/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 13:52:01
 * @Description: file content
 */
import * as types from '../types';
const menuList = [{
  id: '1',
  name: "动态表单",
  icon: "icon-jiqixuexi",
  path: '/ImplementationComponent',
  meta: { authCode: '' },
  children: [
    { id: '3-1', name: "动态表单", path: '/ImplementationComponent', meta: { authCode: '' }, },
    { id: '3-2', name: "ui设计", path: '/UiDesign', meta: { authCode: '' }, },
    // { id: '3-5', name: "基础语料", path: '/basicCorpus', meta: { authCode: '' }, },
    // { id: '3-6', name: "微信号码池", path: '/weChatNumber', meta: { authCode: '' }, },
    // { id: '3-7', name: "话术搜索", path: '/wordSearch', meta: { authCode: '' }, },
    // { id: '3-3', name: "总结标签管理", path: '/cardLabel', meta: { authCode: '' }, },
  ]
}]
const menus = {
  state: {
    // 当前子菜单
    menuChildren: menuList[0].children, // { id: '1-1', name: "首页", icon: "icon-shouye", path: '/home', }
    // 设置当前顶部菜单
    navIndex: "",
    // 当前侧边栏菜单选中
    sideIndex: "",
    // 所有菜单
    menuList: menuList,
    menuTag: {
      icon: "",
      fatherTag: {
        path: "",
        name: ""
      },
      childrenTag: {
        path: "",
        name: ""
      },
      detailsName: ""
    }
  },
  mutations: {
    // 所有菜单
    [types.MENULIST]: (state, menuList) => {
      state.menuList = menuList;
    },
    // 点父节点获取当前子菜单
    [types.MENUCHILDREN]: (state, path) => {
      state.menuList.forEach(item => {
        if (path == item.path) {
          state.menuTag.icon = item.icon;
          state.menuTag.fatherTag.name = item.name;
          state.menuTag.fatherTag.path = item.path;
          state.menuTag.detailsName = "";
          const obj = Object.assign({}, item.children[0]);
          state.menuTag.childrenTag.name = obj.name;
          state.menuTag.childrenTag.path = obj.path;
          state.menuChildren = item.children;
        }
      });
    },
    // 点侧边改变tag菜单
    [types.MENUTAG]: (state, menuTag) => {
      let flagMenu = state.menuChildren.filter(item => item.path === menuTag);
      let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (reg.test(menuTag)) {
        state.menuTag.detailsName = menuTag;
      } else {
        state.menuTag.detailsName = "";
      }
      if (flagMenu != '') {
        state.menuTag.childrenTag.name = flagMenu[0].name;
        state.menuTag.childrenTag.path = flagMenu[0].path;
        state.sideIndex = flagMenu[0].path;
      } else {
        state.menuTag.childrenTag.name = state.menuChildren[0].name;
        state.menuTag.childrenTag.path = state.menuChildren[0].path;
        state.sideIndex = state.menuChildren[0].path;
      }
    },
    // 设置当前顶部菜单
    [types.NAVINDEX]: (state, navIndex) => {
      state.navIndex = navIndex;
    },
    // 设置当前顶部菜单
    [types.SIDEINDEX]: (state, sideIndex) => {
      state.sideIndex = sideIndex;
    },
    CHILDRENLIST: (state, list) => {
      state.menuChildren = list;
    }
    // MENUS: (state, sideIndex) => {
    //     state.sideIndex = sideIndex;
    // },
  },
  actions: {
    //  菜单
    setMenuList({ commit }, menuList = []) {
      commit(types.MENULIST, menuList);
    },
    // 点父节点获取当前子菜单
    setMenu({ commit }, menuChildren = []) {
      commit(types.MENUCHILDREN, menuChildren);
    },
    // 设置当前顶部菜单
    setNavIndex({ commit }, navIndex = '') {
      commit(types.NAVINDEX, navIndex);
    },
    // 设置当前侧边菜单
    setSideIndex({ commit }, sideIndex = '') {
      commit(types.SIDEINDEX, sideIndex);
    },
    // 设置当前侧边栏菜单
    setMenuTag({ commit }, menuTag = '') {
      commit(types.MENUTAG, menuTag);
    },
    setChildren({ commit }, list = []) {
      commit('CHILDRENLIST', list);
    }
    // setPermissionMenus({ commit }, menus = []) {
    //     commit(MENUS, [].concat(menus || []));
    // },
  }
};
export default menus;