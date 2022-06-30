/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 18:17:24
 * @FilePath: /el-packaging-use/src/store/modules/test.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-29 16:58:24
 */

const layoutMenus = {
    state: {
        name: ''
    },
    mutations: {
        SETNAME: (state, name) => {
            state.name = name;
        }
    },
    actions: {
        setName({ commit }, name = '') {
            commit('SETNAME', name);
        },
    }
};
export default layoutMenus;
