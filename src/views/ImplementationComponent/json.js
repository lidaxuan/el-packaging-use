/* jshint esversion: 6 */
/*
 * @Description: 返回的数据结构
 * @Author: 李大玄
 * @Date: 2022-03-29 13:51:17
 * @FilePath: /vue-shelf/src/views/ImplementationComponent/json.js
 */
export default {
  // structId: '22',
  // 表格顶部按钮 例如 新增, 来源 -> tableTopHandleBox
  tableTopHandleBox: [
    { text: '创建', showtype: 'text || button', triggerShowType: 'el-drawer', sceneKey: 'create' },
    { text: "批量删除", showType: "confirm", multipleSelection: true, multipleSelectionKey: "id", message: "确认批量 删除?", title: "删除", url: "/del/id" },
  ],
  searchConfig: {
    sceneOptions: [
      {
        compName: 'input', // -105
        model: '', // -102
        label: '' || '团队标签ID', // 103

        placeholder: 'asdasdasd',
        clearable: true,
        required: false,
        width: '200px',
        value: '111',
      },
      {
        compName: 'select', // -105
        model: '', // -102
        label: '' || '团队标签ID', // 103

        placeholder: 'asdasdasd',
        clearable: true,
        required: false,
        width: '200px',

        options: [{ name: "启用", id: 1 }, { name: "禁用", id: 2 }],
        optionsLabel: "name",
        optionsValue: "id",
        url: {
          url: "/a/b/c",
          method: "get"
        },
      },
      {
        mappingClassField: 'name',
        placeholder: '团队标签名称',
        width: '250px',
        required: false,
        label: '团队标签名称',
        id: '116',
        label: '团队标签名称',
        columnUiPlugin: {
          compName: 'input',
          placeholder: '团队标签名称',
          model: 'name',
          clearable: true,
          required: false,
          width: '250px',
          label: '团队标签名称',
          labelWidth: '100px',
          tableColumnConfig: {
            width: '150px',
            align: 'center',
            label: '团队标签名称'
          },
          mappingClassField: 'name'
        },
        columnUiCss: null,
        validatedPlugin: null,
        sortIndex: 2,
        showInList: 1,
        showInQuery: 1,
        des: '',
        deleteFlag: 1,
        dbIndex: 2
      }
    ],
    // defaultValue: { // 前端根据sceneOptions[i].value 揉出来
    //   id: '',
    //   name: '易聊科技',
    //   userSize: ''
    // },
    // 来源  viewTemplate: searchConfig 打散
    showLabel: false || true,
    labelWidth: ''
  },
  createConfig: {
    sceneOptions: [ // attributes
      {
        id: '115',
        label: '团队标签ID', // 优先使用 searchConfig 其次使用 columnLabel
        model: 'id', // mappingClassField

        compName: 'input', // columnUiPlugin: compName
        required: false,
        // placeholder: 'id',
        // clearable: true,
        // rule:[]
      },
      {
        id: '116',
        label: '团队标签名称',
        compName: 'input',
        placeholder: '请输入团队标签名称',
        model: 'name',
        required: false,
        // rule:[]
      },
    ],
    // defaultValue: { // 前端根据sceneOptions[i].value 揉出来
    //   id: '',
    //   name: '易聊科技',
    //   userSize: ''
    // },
  },
  editConfig: {
    sceneOptions: [{
        mappingClassField: 'name',
        placeholder: '请输入团队标签名称',
        label: '团队标签名称',
        id: '116',
      },
      {
        mappingClassField: 'principal',
        placeholder: '请输入负责人',
        width: '220px',
        label: '负责人',
        id: '117',
        label: '负责人',
      },
      {
        mappingClassField: 'userSize',
        placeholder: '请输入团队成员',
        width: '220px',
        label: '团队成员',
        id: '119',
        label: '团队成员',
      },
      {
        mappingClassField: 'status',
        placeholder: '请输入状态',
        width: '220px',
        label: '状态',
        id: '120',
        label: '状态',
      },
      {
        mappingClassField: 'creator',
        placeholder: '请输入创建人',
        width: '220px',
        label: '创建人',
        id: '121',
        label: '创建人',

      }
    ],
    rules: [],
    labelWidth: '',
    disabled: []
  },
  tableConfig: {
    isPage: true,
    type: ['selection', 'index'],
    // pageNum: 1, // 可有可无
    // pageSize: 10, // 可有可无
    sceneOptions: [
      { slotName: '', prop: 'id', width: '', id: '115', label: '团队标签ID', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'name', width: '', id: '116', label: '团队标签名称', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'principal', width: '', id: '117', label: '负责人', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'asdasd', width: '', id: '118', label: '负责人', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'userSize', width: '', id: '119', label: '团队成员', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'status', width: '', id: '120', label: '状态', sortable: '', type: '', align: '' },
      { slotName: '', prop: 'creator', width: '', id: '121', label: '创建人', sortable: '', type: '', align: '' },
      { slotName: 'asasdasd', prop: 'createTime', width: '', id: '122', label: '创建时间', sortable: true, type: '', align: '' },
      {
        prop: 'handle',
        label: '操作',
        id: '123',
        slotName: 'handle',
        width: '',
        sortable: '',
        type: '',
        align: '',
        plugin: [
          { text: "编辑", showType: "el-dialog", title: "修改", width: "40%", sceneKey: "edit", },
          { text: "删除", showType: "confirm", message: "确认删除此条数据?", title: "删除", }
        ]
      }
    ]
  }
}

// tableColumnData[i]['plugin'] = viewTemplate.tableConfigSlot[tableColumnData[i]['slotName']]



// {
//   prop:     mappingClassField
//   label:    columnLabel
//   id:       '123'
// }
// slotName: columnUiPlugin.tableConfig.slotName
// width:    columnUiPlugin.tableConfig.width
// sortable: columnUiPlugin.tableConfig.sortable
// type:     columnUiPlugin.tableConfig.type
// align:    columnUiPlugin.tableConfig.align
// plugin:   columnUiPlugin.tableConfig.plugin