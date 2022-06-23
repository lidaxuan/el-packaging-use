<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-05-09 09:28:19
 * @FilePath: /textbot-web-view/src/views/layout/MenuTag.vue
-->
<template>
  <div class="menuTag">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :class="['icon', 'iconfont', menuTag.icon]" :to="{ path: menuTag.fatherTag.path }">
        {{ menuTag.fatherTag.name }}
      </el-breadcrumb-item>
      <!--            v-if="menuTag.fatherTag.name!='首页'"-->
      <el-breadcrumb-item v-if="menuTag.childrenTag.name != '首页'" :to="{ path: menuTag.childrenTag.path }">
        {{ menuTag.childrenTag.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="menuTag.fatherTag.name != '/home'">{{ menuTag.detailsName }} </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MenuTag',
  computed: {
    ...mapGetters(['menuTag'])
  }
};
</script>
<style>
.el-breadcrumb__inner.is-link {
  font-weight: normal;
  color: #999;
}
</style>
<style lang="scss" scoped>
.menuTag {
  box-shadow: 0 0px 4px 0 rgba(35, 51, 83, 0.2);
  background: #fff;
  // position: fixed;
  top: 61px;
  z-index: 111;
  width: 100%;

  .el-breadcrumb {
    padding: 21px 20px 20px 8px;
  }

  .el-breadcrumb__item {
    font-size: 14px;
  }
}
</style>
