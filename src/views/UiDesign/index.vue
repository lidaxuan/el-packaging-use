<!--
 * @Description: label-width="80px"
 * @Author: 李大玄
 * @Date: 2022-06-22 13:53:18
 * @FilePath: /el-packaging-use/src/views/UiDesign/index.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 18:53:13
-->
<template>
  <el-card v-highlight class="hmax overauto">
    <el-button @click="drawer = true" type="primary">展示</el-button>
    <el-form>
      <el-form-item label="1.">
        <p>现在的el-web-basic 保持不变 依旧是 ui 组件库</p>
      </el-form-item>

      <el-form-item label="2.">
        统一index.html 模板 <br />
        <img width="300" @click="imgClick()" src="@/assets/983373baffc501078a676e8529eff0b.png" alt="" />
        <p>将现在的ui框架 作为一个组件, 并将内部公共方法进行抛出(axios, store, utils, router...)</p>
        <p>"main": "package/index.js"</p>
        <pre>
          <code> "package/index.js:"  {{packageindexjs}}</code>
        </pre>

        <el-form-item label="2-1.">
          将 layout (header, sidebar, Breadcrumb, main) 作为一个组件 放入插槽slot, 暂时将此组件命名为 <b font="16">Application</b>
          将菜单获取API传入,进行接口调用获取菜单, 或 传入数组
          <pre>
            <code>NavMenu: {{demo.NavMenu}}</code>
          </pre>
        </el-form-item>

        <el-form-item label="2-2.">
          将 store 进行封装(一部分逻辑作为内部交互使用), 项目使用 键值对保持不变 (actions, mutations, state) 作为对象传入 getters使用对这也不变 例
          <pre>
            <code>store: {{demo.store}}</code>
          </pre>
        </el-form-item>
        <el-form-item label="2-3.">
          将 axios 进行封装 包括各种状态码处理, 在外部项目使用方式不变
          <pre>
            <code>interface: {{demo.interface}}</code>
          </pre>
        </el-form-item>
      </el-form-item>
    </el-form>

    <!--  -->
    <el-drawer title="示例demo" size="900px" :visible.sync="drawer" direction="rtl" append-to-body>
      <pre v-highlight>
        <code> {{demo}}</code>
      </pre>
    </el-drawer>

    <ElImageViewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
  </el-card>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import imga from '../../assets/983373baffc501078a676e8529eff0b.png';
import ElImageViewer from 'element-ui/packages/image/src/image-viewer';
export default {
  name: '', // Pascal命名
  mixins: [],
  components: {
    ElImageViewer
  },
  props: {},
  data() {
    return {
      drawer: false,
      packageindexjs: {
        version: '0.1.165',
        axios: 'axios',
        sotre: 'sotre',
        router: 'router',
        install: 'install',
        loadIconFont: 'loadIconFont',
        EShowResizeN: 'EShowResizeN',
        ECountDownN: 'ECountDownN',
        ECountToN: 'ECountToN',
        ECountTimeN: 'ECountTimeN'
      },
      demo: {
        iconLinkArr: ['xxx.css', 'xxx.js'],
        NavMenu: {
          api: '/a/a/a',
          list: [] //数据结构统一
        },
        store: {
          demo1: {
            state: {
              name: '李大玄'
            },
            mutations: { SET_NAME: `(state, name) => {state.name = name;}` },
            actions: { setMenuList: `({ commit }, name = '') => {commit(SET_NAME, name);}` }
          },
          getters: {
            gettersUser: {
              token: (state) => state.user.token, //token
              userMsg: (state) => state.user.userMsg, //线路+
              textRobot: (state) => state.user.textRobot //机器人id
            }
          }
        },
        interface: {
          API: [
            {
              name: 'nomal', //api下文件名
              http: '$HttpNomal', //this.$HttpNomal.labelAll().then(res=>{})
              localUrl: '/apis', //baseUrl
              devUrl: '/', //baseUrl
              testUrl: '/', //baseUrl
              proUrl: '/', //baseUrl
              interface: {
                xxxx: {
                  url: 'xxxxx',
                  methods: 'get'
                }
              }
            }
          ]
        }
      },
      srcList: [],
      showViewer: false,
      imga
    };
  },
  computed: {},
  watch: {
    // temObj: {
    //   handler(newVal, oldVal) {},
    //   deep: true, // 深度
    //   immediate: true, // 立即执行
    // },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    imgClick() {
      this.srcList = [imga];
      this.onPreview();
    },
    onPreview() {
      this.showViewer = true;
    },
    closeViewer() {
      this.showViewer = false;
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
::v-deep .el-card__body {
  height: 100%;
}
.el-form-item {
  display: flex;
  // align-items: center;
}
::v-deep .el-form-item__label {
  font-size: 16px;
  display: block;
  width: 50px !important;
}
::v-deep .el-form-item__content {
  flex: 1;
}
pre,
code {
  white-space: pre !important;
  word-wrap: normal !important;
}
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f !important;
  color: #fff;
  white-space: pre;
  word-break: normal;
}
</style>
