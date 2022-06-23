<template>
  <!--    @mousemove="demo_move" @mouseup="demo_up"-->
  <div class="layout" ref="pageDiv">
    <el-container class="hmax">
      <el-header class="layout-nav">
        <nav-bar />
      </el-header>
      <el-container class="layout-content flex">
        <el-aside v-loading="flag" element-loading-background="rgba(255, 255, 255, 1)" class="layout-content-aside hmax" :width="isCollapse ? '60px' : '178px'">
          <side-bar :isCollapse="isCollapse" />
          <!-- 折叠按钮 -->
          <div class="menuTagr-collapse-btn fl" @click="collapseChage">
            <i :class="['icon iconfont', isCollapse ? 'icon-zhankaianniu' : 'icon-shouqianniu']" />
          </div>
        </el-aside>
        <el-main class="layout-content-main">
          <!-- <menu-tag /> -->
          <div class="flex-item" :class="getClass()" style="height: calc(100% - 0px); overflow: auto">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavBar from './NavBar';
import SideBar from './SideBar';
import MenuTag from './MenuTag';
import { mapGetters } from 'vuex';

export default {
  name: '',
  data() {
    return {
      isCollapse: false,
      flag: false
    };
  },
  components: {
    NavBar,
    SideBar,
    MenuTag
  },
  computed: {
    ...mapGetters(['menuChildren'])
  },
  watch: {
    menuChildren: {
      handler(newVal) {
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 400);
      }
    }
  },
  methods: {
    getClass() {
      const route = this.$route;
      if (route.path != '/templateBazaar') {
        return 'p10';
      }
      return;
    },
    // 侧边栏折叠
    collapseChage() {
      this.isCollapse = !this.isCollapse;
    },
    getMsg() {}
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.layout {
  // position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  // overflow-y: auto;
  // overflow-x: hidden;

  .menuTagr-collapse-btn {
    color: #279af2;
    cursor: pointer;
    border-radius: 10px 0px 0px 10px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -6px;
    z-index: 1;
    height: 68px;
    background: #ccd2d8;
    line-height: 68px;
    margin-top: -34px;
    color: #fff;
    padding-left: 2px;
    font-size: 12px;

    i {
      font-size: 12px;
    }

    &:hover {
      color: #fff;
      background: #d6dbe1;
    }
  }

  &-nav {
    width: 100%;
    height: 60px;
    background-color: #279af2;
    padding: 0 20px 0 0;
    box-shadow: 0 2px 4px 0 rgba(35, 51, 83, 0.2);
  }

  &-content {
    width: 100%;
    // position: absolute;
    // top: 61px;
    bottom: 0;
    height: calc(100% - 60px);

    &-main {
      padding: 0;
    }

    &-aside {
      z-index: 112;
      position: relative;
      box-shadow: 0 2px 2px 0 rgba(35, 51, 83, 0.2);
      height: 100%;
      background-color: #fff;
      overflow-x: hidden;
    }
  }
}

/* .float-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50px;
  height: 50px;

  img {
    width: 25px;
    height: 25px;
    margin-bottom: 3px;
  }

  span {
    font-size: 9px;
    color: #666666;
  }
} */
</style>
