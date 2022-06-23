<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-03-02 15:46:23
 * @FilePath: /el-packaging-use/src/views/ImplementationComponent/index.vue
-->

<template>
  <div class="p20">
    <el-button type="primary" class="mr20" @click="structCreate">创建页面</el-button>
    <el-button type="primary" class="mr20" @click="structUpdate">修改页面</el-button>
    <el-button type="primary" class="mr20" @click="structDelete">删除页面</el-button>
    <el-button type="primary" class="mr20" @click="formatData">添加数据</el-button>
    <el-button type="primary" class="mr20" @click="dataQuery">删除数据</el-button>
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <br />
    <!-- <viewComp ref="viewComp" :structId="structId" v-if="structId">
      <template #handleBox></template>
    </viewComp> -->
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import viewComp from './viewComp/viewComp.vue';
import config from './newPageConfig';
import { data } from './data';

export default {
  name: '', // Pascal命名
  mixins: [],
  components: { viewComp },
  props: {},
  data() {
    return {
      structId: 27
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
    async formatData() {
      const item = {
        structId: this.structId,
        attributes: []
      };
      const attributes = this.$refs.viewComp.defaultConfig.attributes;
      for (let i = 0; i < data.length; i++) {
        const defaultValue = _.assign({}, data[i]);
        console.log(defaultValue);
        for (let j = 0; j < attributes.length; j++) {
          attributes[j].fieldValue = defaultValue[attributes[j].mappingClassField];
          attributes[j].columnUiPlugin = JSON.stringify(attributes[j].columnUiPlugin);
        }
        item.attributes = attributes;
        await this.dataInsert(item);
      }
    },
    async dataInsert(data) {
      // console.log(JSON.stringify(data, null, 2));
      const res = await this.$structDemoClient.dataInsert(data);
      this.$message.success(`${res}`);
    },
    // 页面更新
    async structUpdate() {
      const attributes = this.$refs.viewComp.defaultConfig.attributes;
      for (let i = 0; i < config.attributes.length; i++) {
        for (let j = 0; j < attributes.length; j++) {
          if (config.attributes[i].mappingClassField == attributes[j].mappingClassField) {
            config.attributes[i] = Object.assign({}, attributes[j], config.attributes[i]);
          }
        }
      }
      const obj = {
        id: this.structId,
        viewTemplate: config.viewTemplate,
        name: config.name,
        attributes: config.attributes
      };
      const res = await this.$structDemoClient.structUpdate(obj);
      console.log(res);
    },
    async structDelete() {
      const res = await this.$structDemoClient.structDelete('', false, this.structId);
      console.log(res);
      this.$message.success(res);
    },
    async getConfig() {
      const res = await this.$structDemoClient.structGet({ structId: 11 });
      console.log(res);
      this.config = Object.assign({}, res || {});
    },
    async structCreate() {
      const res = await this.$structDemoClient.structCreate(config);
      console.log(res);
    },

    async dataQuery() {
      const res = await this.$structDemoClient.dataQuery({ structId: this.structId });
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.dataDelete(res[i].id);
      }
    },
    async dataDelete(id) {
      const res = await this.$structDemoClient.dataDelete('', false, `${this.structId}/${id}`);
      console.log(res);
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
</style>
