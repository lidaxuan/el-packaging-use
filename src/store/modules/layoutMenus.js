/*
 * @Author: web.范庆龙
 * @Date: 2020-04-26 10:40:48
 * @LastEditors: 段丽军
 * @LastEditTime: 2022-04-15 17:05:47
 * @Description: file content
 */
import * as types from "../types";
const layoutMenus = {
    state: {
        // 所有菜单
        nomalMenu: [],
        // 面包屑
        breadcrumb: [],
        sideMenu: [],////选中菜单数据
        defaultActiveMenu: "",//选中
        authCodeArr: [],//权限
        layoutTag: [],
        layoutTagId: [],
        defaultActiveHorizontalMenu:"",//横向菜单选中
        removeCurrentTagId:""//删除当前tag标签记录
    },
    mutations: {
        [types.BREADCRUMB]: (state, breadcrumb) => {
            state.breadcrumb = breadcrumb;
        },
        [types.SIDEMENU]: (state, sideMenu) => {
            state.sideMenu = sideMenu;
        },
        [types.NOMALMENU]: (state, nomalMenu) => {
            state.nomalMenu = nomalMenu;
        },
        [types.DEFAULTACTIVEMENU]: (state, defaultActiveMenu) => {
            state.defaultActiveMenu = defaultActiveMenu;
        },
        [types.DEFAULTACTIVEHORIZINTALMENU]: (state, defaultActiveHorizontalMenu) => {
            state.defaultActiveHorizontalMenu = defaultActiveHorizontalMenu;
        },
        [types.AUTHCODEARR]: (state, authCodeArr) => {
            state.authCodeArr = authCodeArr;
        },
        [types.REMOVECURRENTTAGID]: (state, removeCurrentTagId) => {
            state.removeCurrentTagId = removeCurrentTagId;
        },
        [types.LAYOUTTAG]: (state, layoutTag) => {
            state.layoutTag = layoutTag;
        },
        [types.LAYOUTTAGID]: (state, layoutTagId) => {
            state.layoutTagId = layoutTagId;
        }
    },
    actions: {
        setBreadcrumb({commit}, breadcrumb = []) {
            commit(types.BREADCRUMB, breadcrumb);
        },
        setSideMenu({commit}, sideMenu = []) {
            commit(types.SIDEMENU, sideMenu);
        },
        setNomalMenu({commit}, nomalMenu = []) {
            commit(types.NOMALMENU, nomalMenu);
        },
        setDefaultActiveMenu({commit}, defaultActiveMenu = "") {
            commit(types.DEFAULTACTIVEMENU, defaultActiveMenu);
        },
        setRemoveCurrentTagId({commit}, removeCurrentTagId = "") {
            commit(types.REMOVECURRENTTAGID, removeCurrentTagId);
        },
        setDefaultActiveHorizontalMenu({commit}, defaultActiveHorizontalMenu = "") {
            commit(types.DEFAULTACTIVEHORIZINTALMENU, defaultActiveHorizontalMenu);
        },
        setAuthCodeArr({commit}, authCodeArr = []) {
            commit(types.AUTHCODEARR, authCodeArr);
        },
        setLayoutTag({commit}, layoutTag = []) {
            commit(types.LAYOUTTAG, layoutTag);
        },
        setLayoutTagId({commit, state}, layoutTagId = []) {
            let layoutTag = state.layoutTag;
            let index = layoutTag.findIndex(item => {
                return item.id === state.removeCurrentTagId;
            });
            layoutTag=layoutTag.filter(item=> item.id!==state.removeCurrentTagId);
            if(layoutTag.length>0){
                state.layoutTag = layoutTag;
                if(state.removeCurrentTagId===state.defaultActiveMenu ){
                    state.defaultActiveMenu = layoutTag[index] ?layoutTag[index].id :layoutTag[layoutTag.length-1].id;
                }
            }
            commit(types.LAYOUTTAGID, layoutTagId);
        }
    }
};
export default layoutMenus;
