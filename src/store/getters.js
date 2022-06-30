/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 18:17:24
 * @FilePath: /el-packaging-use/src/store/getters.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-29 16:58:12
 */
const gettersTest = {
  name: (state) => state.test.name,
  token: (state) => state.user.token,
};
export default {
  ...gettersTest
};
