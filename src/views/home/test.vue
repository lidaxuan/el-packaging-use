<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-24 18:49:38
 * @FilePath: /el-packaging-use/src/views/home/test.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-29 17:05:35
-->
<template>
  <div class="">
    11
    <div>11</div>
    <e-button-n type="primary" @click="testBtn">111</e-button-n>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from 'vuex';

import { store } from '@/store';
export default {
  name: '', // Pascal命名
  mixins: [],
  components: {
    ...mapGetters(['token', 'name'])
  },
  props: {},
  data() {
    return {};
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
  mounted() {
    console.log('store', store.state.user.token);
    console.log(this.token);
    // console.log('name', this.name);
    console.log();
    // setTimeout(() => {
    //   this.$store.dispatch('setName', '李大玄1111');
    //   this.$store.dispatch('setToken', '李大玄1111');
    //   console.log('store', store.state.test.name);
    // }, 3000);
  },
  methods: {
    testBtn() {
      console.log(this.$router);
      this.$router.push('/asdasd');
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
