/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:16:04
 * @Description: file content
 */
// 注意一定要把user和menus区分开
const gettersUser = {
    token: state => state.user.token,//token
    userMsg: state => state.user.userMsg,//线路+
    textRobot: state => state.user.textRobot//机器人id
};

const gettersMenus = {
    menuList: state => state.menus.menuList,
    menuChildren: state => state.menus.menuChildren,
    navIndex: state => state.menus.navIndex,
    sideIndex: state => state.menus.sideIndex,
    menuTag: state => state.menus.menuTag
};
export default {
    ...gettersUser,
    ...gettersMenus
};
