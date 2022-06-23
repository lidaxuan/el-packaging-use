/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-03-17 13:54:52
 * @FilePath: /vue-shelf/src/views/ImplementationComponent/viewComp/components.js
 */
export default {
  input: {
    compName: '',
    placeholder: '这是输入框',
    model: 'name',
    clearable: true,
    required: false,
    width: '200px'
  },
  select: {
    compName: '',
    placeholder: '这是下拉框',
    model: 'name',
    clearable: true,
    options: [],
    optionsLabel: 'name',
    optionsValue: 'id',
  },
  'date-picker': {
    compName: '',
    placeholder: '这是日期时间选择',
    model: 'time',
    clearable: true,
    type: "datetimerange", // 日期时间
    'range-separator': "至",
    "start-placeholder": "开始日期",
    'end-placeholder': "结束日期",
  },
}