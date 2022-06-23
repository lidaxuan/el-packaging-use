<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-12-09 16:41:54
 * @FilePath: /el-packaging-use/src/views/layout/SideBar.vue
-->
<template>
  <el-menu
    background-color="#fff"
    text-color="#fff"
    :router="true"
    active-text-color="#fff"
    :default-active="$store.getters.sideIndex || menuChildren[0]['path']"
    :collapse="isCollapse"
    @select="handleSelect"
    :key="menuChildren.length"
  >
    <el-menu-item v-for="menu in menuChildren" :index="menu.path" :key="menu.id" style="">
      <!-- <i :class="['icon', 'iconfont', menu.icon]" /> -->
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AsideNav',
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      //   menuChildren: [],
    };
  },
  computed: {
    ...mapGetters(['menuChildren'])
  },
  mounted() {},
  methods: {
    // 点击菜单
    handleSelect(key) {
      this.$store.dispatch('setSideIndex', key);
      this.$store.dispatch('setMenuTag', key);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  width: 100%;
  .pl-5 {
    padding-left: 5px;
  }
  &-item {
    color: #666666 !important;
    text-align: left;
    padding-left: 20px;
    &.is-active {
      background-color: #ecf6ff !important;
      border-left: 4px solid #279af2;
      color: #279af2 !important;
      padding-left: 16px;
    }
    &:hover {
      background-color: #f3f9ff !important;
    }
  }
}
</style>
