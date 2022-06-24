<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 18:17:24
 * @FilePath: /web_beacon/src/views/home/NewMenu.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 09:44:54
-->
<template>
  <div width="100%" height="100%" class="cursor-p position-r img_d flex jc-center ai-center">
    <el-image :src="url"></el-image>
  </div>
</template>

<script>
export default {
  name: 'NewMenu',
  data() {
    return {
      url: require('wb@/assets/img/home/newUi.png'),
      drawer: false,
      drawer1: false
    };
  }
};
</script>

<style lang="scss" scoped>
.img_d {
  background: $-color-6359CA;
}
</style>
