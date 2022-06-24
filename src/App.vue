<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-pack/src/App.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 17:15:52
-->
<template>
  <div id="app">
    111234
    <Application>
      <template v-slot:content>
        <router-view v-if="isShow" />
      </template>
    </Application>
  </div>
</template>

<script>
import Application from 'web_beacon';
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    };
  },
  components: {
    Application
  },
  data() {
    return {
      isShow: true
    };
  },
  created() {
    const obj = {
      name: '1'
    };
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
