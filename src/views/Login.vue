<!--
 * @Descripttion:
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2020-06-25 12:09:53
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-30 14:45:46
-->
<template>
  <div id="login" class="position-r" width="100%" height="100%" v-loading="loading" />
</template>
<script>
import auth from 'wb@/utils/auth';
import jwt from 'jwt-js';
import { mapGetters } from 'vuex';
// import nomalMenu from 'wb@/mock/nomalMenu.json';//菜单数据
// import authority from 'wb@/mock/authority.json';//权限码数据
import findData from 'wb@/utils/findData';
import setting from 'wb@/store/modules/setting';

export default {
  name: 'Login',
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters([
      'token',
      // 'authCodeArr',
      'userMsg'
    ])
  },
  methods: {
    // fifterMenuAuthCode(treeData = [], map = []) {
    //     for (var i = treeData.length; i > 0; i--) {
    //         if (map.indexOf(treeData[i - 1].authCode) == -1) {
    //             treeData.splice(i - 1, 1);
    //         } else {
    //             if (treeData[i - 1].children) {
    //                 this.fifterMenuAuthCode(treeData[i - 1].children, map);
    //             }
    //         }
    //     }
    //     return treeData;
    // },
    treeDataSource(arr) {
      return arr.map((v) => {
        return {
          ...v,
          icon: v.iconUrl || '',
          authCode: v.code || '',
          path: '/newMenu' || '',
          children: v.data ? this.treeDataSource(v.data) : []
        };
      });
    },
    async getMenu(nomalMenu) {
      // let tempArray = this.authCodeArr.map(item => {
      //     return item.name;
      // })
      // let tempArray1 = this.authCodeArr.map(item => {
      //     return item.authority;
      // })
      // let children;
      // if (tempArray.indexOf(this.userMsg.userId) == -1) {
      //     children = this.fifterMenuAuthCode(nomalMenu, tempArray1);
      // } else {
      //     children = nomalMenu;
      // }

      let children = nomalMenu;
      children.forEach((item, index) => {
        item.countId = index.toString();
      });

      this.$store.commit('nomalMenu', children); //先获取所有菜单
      this.$store.commit('defaultActiveHorizontalMenu', children[0].countId); //横向菜单选中

      if (children && children[0].children) {
        this.$store.dispatch('setSideMenu', children[0].children);
      } else {
        this.$store.dispatch('setSideMenu', [children[0]]);
      }
      let arr = findData.findParentArr(findData.getDataId([children[0]]).id, findData.treeLevel(children), children);

      this.$store.commit('breadcrumb', arr); //面包屑
      this.$store.commit('layoutTag', findData.getDataId([children[0]])); //tag标签
      this.$store.commit('defaultActiveMenu', findData.getDataId([children[0]]).id);
      this.$router.push({
        path: '/newMenu'
      });
    },

    initLayout() {
      this.$store.commit('token', null); //token初始化
      this.$store.commit('layoutSetting', setting.layoutSetting); //主题布局初始化
      this.$store.commit('layoutTag', ''); //tag标签页
      this.$store.commit('nomalMenu', []); //先获取所有菜单
      auth.getToken('access_token').then((res) => {
        this.$store.commit('token', res);
        if (this.token === null) {
          auth.jumpLogin();
        } else {
          auth.jumpOriginUrl();
          let tokenData = jwt.decodeToken(res);
          this.$store.commit('userMsg', tokenData.payload);
          // this.$store.commit("authCodeArr", authority);
          this.$HttpNomal.getMenuList().then((res) => {
            this.getMenu(this.treeDataSource(res.data));
          });
        }
      });
    }
  },
  mounted() {
    console.log(1);
    this.initLayout();
  }
};
</script>
