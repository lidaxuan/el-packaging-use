<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 09:54:44
 * @FilePath: /el-packaging-use/src/App.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 11:38:05
-->
<template>
  <div id="app">
    <router-view v-if="isShow"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    reload(){
      this.isShow=false;
      this.$nextTick(()=>{
        this.isShow=true
      })
    }
  }
}
</script>
