class Setting {
  constructor() {
    this.layoutSetting = {
      tag: {
        value: "0",
        disabled: false,
      },
      // 主题布局
      themeLayout: {
        value: "0",
      },
      // 主题色系
      color: {
        value: "#6359CA",
        pickerColor: "",
      },
      // 菜单布局
      layout: {
        value: "0",
      },
    };
  }
}
export default new Setting();
