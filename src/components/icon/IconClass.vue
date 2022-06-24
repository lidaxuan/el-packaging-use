<!--
 * @version: v1.2.0
 * @Author: 范庆龙
 * @Date: 2021-08-13 15:07:58
 * @LastEditors: 范庆龙
 * @LastEditTime: 2021-08-19 17:07:11
 * @FilePath: \my-project\src\components\icon\IconClass.vue
-->
<template>
  <i
    :class="['iconfont', iconTag]"
    :style="{ color: color, fontSize: fontSize + 'px' }"
    @click="iconClick"
  >
    <span
      :style="{
        fontSize: fontSize + 'px',
        color: color,
        paddingLeft: paddingLeft + 'px',
      }"
      ><slot
    /></span>
  </i>
</template>

<script>
export default {
  name: "iconFontClass",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    color: {
      // 字体颜色
      type: String,
      default: "#6359CA",
    },
    fontSize: {
      // 字体大小
      type: [String, Number],
      default: "14px",
    },
    paddingLeft: {
      // 字体内边距
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    iconTag() {
      return `icon ${this.iconClass}`;
    },
  },
  methods: {
    iconClick() {
      this.$emit("iconClick");
    },
  },
};
</script>

<style scoped>
/*@import "//at.alicdn.com/t/font_2735677_1qiwpr5mzne.css";*/
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
