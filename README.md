<!--
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2021-08-18 13:03:19
 * @LastEditors: 范庆龙
 * @LastEditTime: 2021-08-20 23:17:56
--> 

##  一、 clone the project
http://git.kinfe.net/el-web-project/项目名
##  二、 使用 npm

#### install dependency

```
npm install
```
####  Compiles and hot-reloads for development
```
npm run serve
```
####  Compiles and minifies for production
```
npm run build
```

## 三、 使用 yarn
#### install dependency
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```
#### 四、项目结构
|-- public

|   |---------------- favicon.ico                  //网站图标

|   |---------------- index.html                   //入口页面

|--src

|   |---------------- api                          // 及所有调用接口的管理。
                                                     
                1、针对性创建文件。对应路由组件所需的接口。
                                                 
|   |---------------- assets                       // 静态文件，比如一些图片、基础样式、全局样式等。
               
               1、base：基础样式。
               2、icon：icon资源。
               3、img：对应模块的图片。
               4、style。对应模块的样式。
            
               

|   |---------------- components                   // vue公共组件。
              
                1、自定义组件。如计时器等 
                2、layouts // 整体布局组件
                     |--src //全局交互逻辑和组件
                    （1）、左侧和头部菜单、tags标签页、面包屑 
                    （2）、头部设置 (logo、拨打电话、搜索、消息提醒、个人设置、主题风格)等
                     |--index
                    （1）、布局的入口文件及整体布局。
                               
                                                     

|   |---------------- directives                   // 自定义指令.
                      
                          1、 拖拽 
                          2、输入校验                            
  
|   |---------------- mock                         // 虚拟数据. 
                                                    

|   |---------------- mixins                       // vue的混入器 共享方法和数据状态.

|   |---------------- router                       // vue的路由管理 

|   |---------------- service                        // axios二次封装主要针对公共参数、请求方式、请求格式的封装
                                                       
               1、baseUrl：接口及上下文
               2、index: 根据环境切换调用不同接口的交互
               3、request：axios二次封装

|   |---------------- store                        // vuex等公共数据管理  
               
               1、modules 模块化管理
               2、针对性持久化。如sessionStorage、localStorage。。。
                                                      
|   |---------------- utils                        // 项目工具文件，如：格式化日期、xlsx、手机号、密码校验等.

|   |---------------- views                        // 以页面为单位的vue文件、html文件等
                
               1、所有路由组件。

|   |---------------- App.vue                      // 页面入口文件

|   |---------------- main.js                      // 程序入口文件，加载各种公共组件

 
|--.eslintignore                                   // 隔离不监测语法错误的插件

|--.env                                            // 默认环境  
           
|--.env.dev                                        // 开发环境

|--.env.test                                       // 测试环境

|--.env.pre                                       // 测试环境

|--.env.prod                                       // 生产环境

|-- babel.config.js                                // babel  语法转化形式 及element等 按需求加载

|-- package.json                                   // 项目基本信息,包依赖信息等

|-- README.md                                      // 项目说明

|-- vue.config.js                                  //  服务配置、打包配置等


   
    注意：每个模块的入口文件最好以index开头。如：
    
    |----------------XXX                                        // 目录
                         index.(js|vue ...)                      入口文件
                         src                                     所有组件或插件
            
##  五、部分主要功能交互实现逻辑。
  
   （一）、 首先登陆
       
       1、login组件是过渡组件
          这里是跳转第三方认证的逻辑
          
       2、登陆时去第三方认证服务
           定义变量 先拼接url和当前项目的url
           this.originUrl = window.location.origin+"/web_beacon/view";
           this.unified = process.env.VUE_APP_LOGIN_URL + "?redirectUri=" + this.originUrl;
           
           比如：http://dev-app.easyliao.com/auth-sso/oauth/web/login/view?redirectUri=http://localhost:8080/web_beacon/view
           前面是认证服务 后面参数redirectUri是当前项目的url
      
       3、登陆后会返回token和项目url
          要截取token进行存储然后进行跳转项目路由
          
   （二）、侧边菜单、横向菜单、面包屑、tag标签页和控制的交互逻辑。
       
        注意：整体的ui样式和逻辑交互是根据正常需求来设定的，操作时侧边菜单、横向菜单、tag标签、面包屑都要同时变化。
        
                   this.$store.dispatch("setLayoutTag", this.easyDetail[0]);//tag标签
                   this.$store.dispatch("setDefaultActiveMenu", this.easyDetail[0].id)//当前侧边菜单选中
                   this.$store.dispatch("setBreadcrumb", this.easyDetail); //面包屑
                   this.$store.dispatch("setDefaultActiveHorizontalMenu", this.easyDetail[0].id);//横向菜单选中
        1、首先这些功能组件数据都会存储到缓存里记录操作。登录时要初始对应的数据。
       
        2、侧边菜单的交互；
           （1）、整体数据是父子结构数据，进入项目时会生成层级level 。
                使用levelFun动态生成level
                 levelFun(array,menuFlag,levelName = 'level', childrenName = 'children') {
                        if (!Array.isArray(array)) return [];
                        const recursive = (array, level = -1) => {
                            level++;
                            return array.map(v => {
                                v[levelName] = level;
                                const child = v[childrenName];
                                if (child && child.length) {
                                    if(menuFlag=="0"){
                                        for (let j of child || []) {
                                            j.icon = "";
                                        }
                                    }
                                    recursive(child, level);
                                }
                                return v;
                            })
                        }
                        return recursive(array);
                    }
                菜单 id从0开始 为什么要从0开就这为横向菜单埋下的伏笔
                如：
                  {
                    "id": "0",//菜单id
                    "icon": "icon-A-A2",//菜单icon
                    "name": "首页总框架",//菜单名
                    "authCode": "admin",//权限码
                    "path": "/newMenu",
                    "level": "0",
                    "children": [
                         //第一个数据是为了收起时菜单要展示父级菜单
                          {
                            "id": "0-1",
                            "icon": "",
                            "level": "1",
                            "name": "首页总框架",                 
                            "disabled": true,//禁用
                            "authCode": "admin"
                          },
                          {
                            "id": "0-2",
                            "icon": "",
                            "name": "数据列表",
                            "disabled": true,
                            "authCode": "admin",
                            "level": "1",
                          },
                        ]
                  },
                
           （2）、当选中子集的菜单第一菜单要跟着选中色
           
            (3) 、选中时面包屑和tag标签跟着切换。
            
           （4）、浏览器刷线时记录当前选中。（菜单、面包屑、tag标签）
            
            2、横向菜单的交互；
           
               （1）、首先下面选中的横线动画是增加一个dom元素进行向左右滑动，滑动时是根据dom节点margin-left进行滑动 因为要获取每个菜单的dom元素偏移值 而获取dom下标要从0开始 所以菜单id要从0开始
                      代码： this.styleObj = {
                               'height': '2px',
                               'width': this.$refs.tabs[val].$el.offsetWidth + 'px',
                               'margin-left': this.$refs.tabs[val].$el.offsetLeft + 'px',
                               'transition': 'all 0.3s linear',
                               'bottom': '0px',
                               'position': 'absolute'
                             }
               （2）、点击横向菜单时要获取当前所有子节点进行侧边菜单整体切换。
           
               （3）、浏览器刷线时记录当前选中。（侧边菜单、横向菜单、面包屑、tag标签）。
        
            3、tag菜单的交互；
            
               （1）、整体数据是菜单的所有的子菜单的集合。
            
               （2）、当操作删除选中tag菜单时要跳到最后一个菜单上，然后侧边菜单和面包屑跟随变化记录。（删未选中的可忽略）。
            
               （3）、删除所有时或者删除到最后时会保留最后一个。
                
               （4）、数据结构和面包屑是不一样的，它是取子级数据。
            
            4、面包屑的交互；
            
               （1）、数据结构和tag标签是不一样的，它是取父子级数据。
             
               （2）、无操作性、跟随菜单选中变化。
               
   （三）、api和axios 逻辑封装。
         
         1、针对服务来建文件夹。
         2、类型是对象方式。
         3、axios二次封装针对多服务进行封装，然后动态挂载对应的服务上。
             
            |----service 文件夹
             
                 --baseUrl 管理多服务baseUrl
                    {
                          name: "nomal",//api下文件名
                          http: "$HttpNomal",//this.$HttpNomal.labelAll().then(res=>{})
                          localUrl: "/devnomal",//baseUrl
                          devUrl: "/devnomal",//baseUrl
                          testUrl: "tesnomal",//baseUrl
                          proUrl: "pronomal",//baseUrl
                    }
                 
                 --request 二次封装axios并动态加载对应的接口
                 --index  动态创建axios的baseUrl实例，然后动态挂载vue原型上
                                          服务     接口方法
                          用法：如  this.$HttpNomal.labelAll(params,obj).then(res=>{})
                         
                          传参  两个参数  params,obj = {}
                                
                               let {config = {}, contentType = null, splicingParams = undefined} = obj
                               // config 配置参数 object
                               // contentType 请求头 str 可传入不同Content-Type （传入form-data 可使用formData对象接收参数）
                               // splicingParams 默认undefined 传入str 将在url直接加参数        
