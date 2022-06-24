/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: web.duanzhaozhao
 * @LastEditTime: 2020-11-19 14:10:01
 * @Description: file content
 */
// 注意一定要把user和menus区分开
const gettersHome = {
  page: (state) => state.home.page,
  easyDetail: (state) => state.home.easyDetail,
  routeView: (state) => state.home.routeView,
};
const gettersUser = {
  token: (state) => state.user.token,
  userMsg: (state) => state.user.userMsg,
  layoutSetting: (state) => state.user.layoutSetting,
};
const gettersLayoutMenus = {
  breadcrumb: (state) => state.layoutMenus.breadcrumb,
  sideMenu: (state) => state.layoutMenus.sideMenu,
  nomalMenu: (state) => state.layoutMenus.nomalMenu,
  defaultActiveMenu: (state) => state.layoutMenus.defaultActiveMenu,
  defaultActiveHorizontalMenu: (state) =>
    state.layoutMenus.defaultActiveHorizontalMenu,
  authCodeArr: (state) => state.layoutMenus.authCodeArr,
  layoutTag: (state) => state.layoutMenus.layoutTag,
  layoutTagId: (state) => state.layoutMenus.layoutTagId,
  removeCurrentTagId: (state) => state.layoutMenus.removeCurrentTagId,
};
export default {
  ...gettersHome,
  ...gettersUser,
  ...gettersLayoutMenus,
};
