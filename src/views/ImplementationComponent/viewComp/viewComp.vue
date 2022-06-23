<!--
 * @Description:  A模板
 * @Author: 李大玄
 * @Date: 2022-03-02 15:44:53
 * @FilePath: /vue-shelf/src/views/ImplementationComponent/viewComp/viewComp.vue
-->
<template lang="pug" src="./template/index.pug">
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import _ from 'lodash';
import uuid from 'uuid';
import { required, getSceneData, formatResponseData } from './util';
import newPageConfig from '../newPageConfig';
import json from '../json';

export default {
  name: '', // Pascal命名
  mixins: [],
  components: {},
  props: {
    // config: Object,
    structId: [Number, String]
  },
  data() {
    return {
      tableData: [],
      rowData: {},
      handleBtnInfo: {},
      pageLoading: false, // table searchBtn
      createBtnLoading: false,
      // 接口请求来的config
      totalNumber: 0,
      pageNumber: 1,
      pageSize: 10,
      isPage: false,
      multipleSelection: [], // 表格多选
      handleBox: {
        type: 1
      },
      defaultConfig: {
        struct: {
          viewTemplate: {}
        }
      },

      tableColumnData: [], // align: 'center',
      searchMap: {
        sceneOptions: [],
        defaultValue: {}
      },
      createMap: {
        sceneOptions: [],
        defaultValue: {}
      },
      editMap: {
        sceneOptions: [],
        defaultValue: {}
      },
      visible: false,
      tableTopHandleBox: [], // 表格顶部按钮盒子
      // 表格操作 slot 名称
      tableConfigSlot: {
        handle: []
      }
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {
    // this.getConfig();
    this.formatJson();
  },
  beforeMount() {},
  mounted() {},
  methods: {
    async formatJson() {
      this.pageLoading = true;
      const res = await this.$structDemoClient.structGetPage({ structId: this.structId });
      if (res.code) {
        this.$message.error(res.msg);
        return;
      }
      const pageConfig = res.data || {};
      console.log(pageConfig);
      this.pageLoading = false;
      this.isPage = pageConfig.isPage || false;
      this.pageNumber = pageConfig.pageNum || 1;
      this.pageSize = pageConfig.pageSize || 10;
      this.tableColumnData = [].concat(pageConfig.tableColumnData || []);
      // this.tableConfigSlot = Object.assign({}, pageConfig.tableConfigSlot || {});
      this.searchMap = Object.assign({}, pageConfig.searchConfig || {});
      return;
      this.tableTopHandleBox = [].concat(pageConfig.tableTopHandleBox || []);
      this.handleBox = Object.assign({}, pageConfig.handleBox || {});
      this.createMap = Object.assign({}, pageConfig.createMap || {});
      this.editMap = Object.assign({}, pageConfig.editMap || {});
      this.fetchData();
    },
    // ---------------------------------------------------------------------------------
    // 获取页面配置
    async getConfig() {
      const res = await this.$structDemoClient.structGet({ structId: this.structId });
      this.defaultConfig = _.cloneDeep(Object.assign({}, res || {}));
      await this.forMatConfig();
      this.fetchData();
    },
    async forMatConfig() {
      this.defaultConfig.struct.viewTemplate = JSON.parse(this.defaultConfig.struct.viewTemplate);
      for (let i = 0, len = this.defaultConfig.attributes.length; i < len; i++) {
        if (this.defaultConfig.attributes[i].columnUiPlugin) {
          this.defaultConfig.attributes[i].columnUiPlugin = JSON.parse(this.defaultConfig.attributes[i].columnUiPlugin);
        }
      }
      const {
        struct: {
          viewTemplate: { pageSize, pageNum, isPage, tableTopHandleBox }
        }
      } = this.defaultConfig;

      this.pageNumber = pageNum || 1;
      this.pageSize = pageSize || 10;
      this.isPage = isPage || false;
      this.tableTopHandleBox = [].concat(tableTopHandleBox || []);

      await this.isNeedOptions(this.defaultConfig.attributes);
      this.searchMap = getSceneData(this.defaultConfig, 'search');
      this.createMap = getSceneData(this.defaultConfig, 'create');
      this.editMap = getSceneData(this.defaultConfig, 'edit');
      this.getTableColumnData();
    },
    // 获取规则
    getItemRule(item) {
      return required(item);
    },
    // 获取显示组件类型
    getComponentType(item) {
      if (!Object.keys(item).length) {
        return;
      }
      if (!['select'].includes(item.columnUiPlugin.compName)) {
        return true;
      }
      return item.columnUiPlugin.compName;
    },
    // 获取 select options
    async isNeedOptions(attributes) {
      for (let i = 0, len = attributes.length; i < len; i++) {
        if (attributes[i].columnUiPlugin.compName == 'select') {
          if (!attributes[i].columnUiPlugin.options.length && attributes[i].columnUiPlugin.url) {
            let res = await this.fetchSelectOptions(attributes[i].columnUiPlugin.url);
            attributes[i].columnUiPlugin.options = res;
          }
        }
      }
    },
    async fetchSelectOptions(url) {
      const pre = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { name: '易聊', id: '11' },
            { name: '科技', id: '22' }
          ]);
        }, 100);
      });
      const res = await pre;
      return res;
    },
    // 顶部搜索按钮展示类型
    /**
     * @description:
     * @param {*} handleBox type: 1, // 1:默认且追加  2:覆盖
     * @return {*}
     */
    buttonDisplayType() {
      if (this.searchMap.sceneOptions.length && this.handleBox.type == 1) {
        return true;
      }
      return false;
    },
    // 查询
    searchBtn() {
      this.$refs.searchForm.validate((valid) => {
        if (!valid) {
          return;
        }
        this.pageNumber = 1;
        this.fetchData();
      });
    },
    // 重置
    resetBtn() {
      this.$refs.searchForm.resetFields();
      this.searchBtn();
    },
    // 获取表格 attrs
    getTableAttrs() {
      return {
        isPage: this.isPage,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        totalNumber: this.totalNumber || 0
      };
    },
    // 获取表格列
    getTableColumnData() {
      this.tableColumnData = this.defaultConfig.attributes
        .map((item) => {
          item.prop = item.mappingClassField;
          item.label = item.columnLabel;
          item = Object.assign({}, item, item.columnUiPlugin, item.columnUiPlugin.tableColumnConfig);
          return item;
        })
        .filter((item) => {
          return item.showInList == 1;
        });
    },
    // --------------------------
    // 查询数据
    async fetchData() {
      const query = {
        pageNo: this.pageNumber,
        pageSize: this.pageSize,
        structId: this.structId
      };
      let params = { ...this.searchMap.defaultValue };
      for (const key in params) {
        if (!params[key]) {
          delete params[key];
        }
      }
      if (_.compact(Object.values(params)).length) {
        query.params = JSON.stringify(params);
      }
      const funName = this.isPage ? 'dataPageQuery' : 'dataQuery';
      const res = await this.$structDemoClient[funName](query);
      this.tableData = formatResponseData(res.rows);
      this.totalNumber = res.total;
    },
    pageSizeChange(val) {
      this.pageNumber = 1;
      this.pageSize = val;
      this.fetchData();
    },
    pageNumberChange(val) {
      this.pageNumber = val;
      this.fetchData();
    },
    handleSelectionChange(val) {
      this.multipleSelection = [].concat(val || []);
    },
    // 表格内部按钮  修改 删除
    tableHandle(row, btn) {
      this.handleBtnInfo = Object.assign({}, btn);
      // 有场景的 confirm没有场景
      if (this.handleBtnInfo.sceneKey) {
        this[`${this.handleBtnInfo.sceneKey}Map`].defaultValue = Object.assign({}, row);
      } else {
        // 没有场景 例如confirm
        this.rowData = Object.assign({}, row);
      }
      this.setDefaultValue(btn);
    },
    // 表格顶部按钮操作  新增展示
    tableTopHandleBtn(btn) {
      // multipleSelection 多选配置
      if (btn.multipleSelection && !this.multipleSelection.length) {
        this.$message.info('请先勾选要操作的数据');
        return;
      }
      this.handleBtnInfo = Object.assign({}, btn);
      this.setDefaultValue(btn);
      // 新增的时候 回复初始
      const data = this.$options.data();
      this[`${this.handleBtnInfo.sceneKey}Map`].defaultValue = data[`${this.handleBtnInfo.sceneKey}Map`].defaultValue;
    },
    // 不同场景设置默认值
    setDefaultValue(btn) {
      switch (btn.showType) {
        case 'confirm':
          this.confirmHandle();
          break;
        case 'el-dialog':
          this.visible = true;
          break;
        case 'el-drawer':
          this.visible = true;
          break;

        default:
          break;
      }
    },
    //  confirm 操作
    confirmHandle() {
      this.$confirm(`${this.handleBtnInfo.message || '您确定执行此操作?'}`, `${this.handleBtnInfo.title || '提示'}`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          try {
            // 不论是 表格中 还是表格外 confirm 都没有场景 只有 当前操作的数据
            let query = Object.assign({}, this.rowData);
            if (this.handleBtnInfo.multipleSelection && this.multipleSelection.length) {
              if (this.handleBtnInfo.multipleSelectionKey == 'all') {
                query.ids = this.multipleSelection;
              } else {
                query.ids = this.multipleSelection.map((item) => {
                  return item[this.handleBtnInfo.multipleSelectionKey || 'id'];
                });
              }
            }
            this.multipleSelection = [];
            const res = await this.$structDemoClient.dataDelete('', false, `${this.structId}/${query.id}`);
            this.$message({ type: 'success', message: `${this.handleBtnInfo.title || '操作'}成功!` });
            this.fetchData();
          } catch (error) {
            console.log(error);
          }
        })
        .catch(() => {
          this.$message({ type: 'info', message: `已取消${this.handleBtnInfo.title}` });
        });
    },
    // 当前场景对象
    getCurrentSceneMap() {
      return this[`${this.handleBtnInfo.sceneKey}Map`].defaultValue;
    },
    // 提交   只有是弹窗出现 就会有场景
    async handleSubmit() {
      const defaultValue = _.assign({}, this[`${this.handleBtnInfo.sceneKey}Map`].defaultValue);
      const attributes = [].concat(this.defaultConfig.attributes || []);
      const obj = {
        structId: this.structId,
        attributes: [],
        id: defaultValue.id
      };
      for (let i = 0; i < attributes.length; i++) {
        attributes[i].fieldValue = defaultValue[attributes[i].mappingClassField];
        if (this.handleBtnInfo.sceneKey == 'create') {
          attributes[i] = _.omit(attributes[i], ['id', 'structId']);
        }
        attributes[i].columnUiPlugin = JSON.stringify(attributes[i].columnUiPlugin);
      }
      obj.attributes = attributes;
      this.createBtnLoading = true;
      if (this.handleBtnInfo.sceneKey == 'edit') {
        await this.dataUpdate(obj);
      } else if (this.handleBtnInfo.sceneKey == 'create') {
        await this.dataInsert(obj);
      }
      this.createBtnLoading = false;
      this.visible = false;
    },
    async dataInsert(data) {
      const res = await this.$structDemoClient.dataInsert(data);
      this.$message.success(`${res}`);
      this.fetchData();
    },
    async dataUpdate(data) {
      const res = await this.$structDemoClient.dataUpdate(data);
      this.$message.success(`${res}`);
      this.fetchData();
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
::v-deep .el-drawer__body {
  height: calc(100% - 40px);
}
</style>