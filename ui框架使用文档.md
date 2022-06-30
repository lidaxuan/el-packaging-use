@Description: UI 框架使用文档
@Author: 李大玄
@Date: 2022-06-30 09:33:28



1. 下载依赖

```javascript
npm config set registry "http://svn.kinfe.net:8082/repository/easyliao-npm-all/"
npm config set always-auth true
npm config set _auth "YWRtaW46S2luZmUjMTIzNDU2"
npm i web_beacon
```

2. `Vue.config.js`  指定 文件引用路径

   ```javascript
    config.resolve.alias
               .set("wb@", path.join(__dirname, "node_modules/web_beacon/src"))
   ```

   `src/router/index.js` 路由通过 web_beacon的创建方法, 将routerMap 传入

   ```javascript
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
     },
   ];
   
   export const router = createRouter(routes);
   ```

   `src/store/index.js`  路由通过 web_beacon的创建方法, 参数有 `modules, getters, plugins`

   ```javascript
   import { createStore } from 'wb@/store'
   
   const stoteConfig = {
     modules: utils.readFile(files),
     getters,
     plugins: [
       createPersistedState({
         key: "S",
         storage: window.sessionStorage, //选择 sessionStorage 进行存储
       }),
     ]
   };
   
   // 指定当前项目存储的key 如果二者都不传的话 默认使用web_beacon的配置
   // storeKey 是内部插件的配置值
   const storeKey = 'el-packaging-use';
   export const store = createStore(stoteConfig, storeKey);
   ```

   `plugins`存在默认值,默认存在`sessionStorage`中

