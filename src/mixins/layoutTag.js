/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 18:17:24
 * @FilePath: /web_beacon/src/mixins/layoutTag.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 09:43:30
 */
import findData from "wb@/utils/findData";

export default {
  data() {
    return {
      defaultValue: "",
      tagsList: [],
      result: [],
    };
  },
  watch: {
    defaultActiveMenu(v) {
      this.defaultValue = v;
      let obj = findData.getParentId(this.layoutTag, v);
      if (obj) this.$router.push(obj.path);
    },
    layoutTag: {
      handler(newVal) {
        this.tagsList = newVal;
      },
      deep: true,
    },
  },
  created() {
    this.result = findData.treeLevel(this.nomalMenu);
  },
  methods: {
    dispatchBreadcrumb(defaultActive, menuList) {
      this.$store.dispatch("setDefaultActiveMenu", defaultActive);
      let dispatch = findData.findParentArr(
        defaultActive,
        this.result,
        menuList
      );
      let objP = this.nomalMenu.find((item) => {
        return item.id == dispatch[0].id;
      });
      if (this.layoutSetting.layout.value == "1") {
        this.$store.dispatch("setDefaultActiveHorizontalMenu", objP.countId);
      }
      this.$store.dispatch("setBreadcrumb", dispatch);
    },
    setLayoutTagId(defaultValue) {
      this.$store.dispatch("setLayoutTagId", defaultValue);
      this.dispatchBreadcrumb(this.defaultActiveMenu, this.nomalMenu);
    },
    // 关闭全部标签
    closeAll() {
      this.$store.dispatch("setLayoutTag", "");
      this.dispatchBreadcrumb(this.defaultActiveMenu, this.nomalMenu);
    },
    // 点击当前tag
    tabClick(v) {
      this.dispatchBreadcrumb(v, this.nomalMenu);
    },
    // 关闭当前标签
    closeCru(v) {
      this.$store.dispatch("setRemoveCurrentTagId", v);
      this.setLayoutTagId([v]);
    },
    lrClose(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      this.setLayoutTagId(delItem ? [delItem.id] : []);
    },
  },
  mounted() {
    this.defaultValue = this.defaultActiveMenu;
    this.tagsList = this.layoutTag;
  },
};
