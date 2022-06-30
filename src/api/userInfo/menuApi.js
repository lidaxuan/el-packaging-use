/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-30 19:32:25
 * @FilePath: /el-packaging-use/src/api/userInfo/menuApi.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-30 19:46:22
 */

const menuApi = {
  // 菜单 接口
  getMenuList: {
    url: "/permission/menus",
    method: "get",
    type: 'robot'
  },
  getLoginDetail: {
    url: "/staff/login/detail",
    method: "get",
    type: 'robot'
  },
  getMenuList: {
    url: "/menu/list",
    method: "get",
    type: 'bus'
  },
};
export default menuApi;
