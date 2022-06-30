/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-30 17:55:35
 * @FilePath: /el-packaging-use/src/api/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-30 18:57:49
 */
let ApiMap = {};
// 自动加载该目录下的所有文件
const files = require.context('./', true, /\.(vue|js)$/);
// 根据文件名组织模块对象
files.keys().map(src => {
  const match = src.match(/\/(.+)\./);
  if (match && match.length >= 1) {
    const name = match[1].split('/')[0];
    const moduleValue = files(src);
    if (moduleValue.default) {
      ApiMap[name] = { ...moduleValue.default }
    }
  }
});
export default ApiMap;