<template>
  <div class="header flex flex-ccb">
    <div class="flex flex-aic">
      <div class="header-logo w160 flex flex-aic ml20">
        测试
      </div>

      <el-menu
        background-color="#279af2"
        text-color="#fff"
        :router="true"
        active-text-color="#fff"
        :default-active="$store.getters.navIndex"
        mode="horizontal"
        align="center"
        @select="handleSelect"
      >
        <el-menu-item v-for="menu in menuList" :index="menu.path" :key="menu.id">
          <template>
            <span :class="['icon', 'iconfont', menu.icon]" />
            <span slot="title" >{{ menu.name }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="flex flex-aic fr">
      <!-- 全屏显示 -->
      <!-- <div class="header-fullscreen" @click="handleFullScreenClick">
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
          <i font="22" :class="['icon', 'iconfont', 'iconping', fullscreen ? 'icon-xiaoping_1' : 'icon-quanping_1']" />
        </el-tooltip>
      </div> -->
      <!-- 用户头像 -->
      <div class="header-user-avator" font="26">
        <span class="el-icon-switch-button pointer" @click="handleCommand" />
      </div>
    </div>
  </div>
</template>

<script>
// import fullScreen from '../../mixins/fullScreen';
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  mixins: [],
  computed: {
    ...mapGetters(['userMsg', 'menuList'])
  },
  inject: ['reload'],
  data() {
    return {
      fullscreen: false
    };
  },
  methods: {
    handleFullScreenClick() {
      let elem = document.documentElement;
      this.handleFullScreen(elem);
    },
    // 点击父菜单
    handleSelect(key) {
      this.$store.dispatch('setNavIndex', key);
      this.$store.dispatch('setSideIndex', key);
      this.$store.dispatch('setMenu', key);
    },
    // 退出
    loginOut() {
      window.sessionStorage.clear();

      // setTimeout(() => {
      //   this.$store.dispatch('LogOut');
      //   this.$router.push('/login');
      // }, 1000);
    },
    handleCommand() {
      window.sessionStorage.clear();
      this.reload();
      window.location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
.plr-10 {
  padding: 0 10px;
}

ul li::after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;
  background: #3498db;
  transform: scaleX(0);
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

ul li:hover::after,
ul li.active::after {
  transform: scaleX(1);
}

.header .icon {
  font-size: 18px;
}

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
  color: #fff;



  /*菜单*/
  .el-menu {
    &-item {
      min-width: 100px;
      padding: 0 15px;
      background: #3498db;

      &.is-active {
        background-color: rgba(232, 241, 249, 0.16) !important;
      }

      &:hover {
        background-color: #3c3e5f;
      }
    }
  }


  &-user-avator {
    display: flex;
    height: 60px;
    align-items: center;

  }
}
</style>
