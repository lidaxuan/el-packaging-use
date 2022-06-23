/* jshint esversion: 6 */
/*
 * @Description: 保存的数据结构 
 * @Author: 李大玄
 * @Date: 2022-03-22 10:39:05
 * @FilePath: /vue-shelf/src/views/ImplementationComponent/newPageConfig.js
 */
export default {
  // struct: {
  // id: 6,
  companyId: 0,
  name: "工单配置6",
  desp: null,
  parentId: 0,
  showDetailTab: 1,
  mappingClass: "com.easyliao.struct.client.demo.resource.StructDto",
  migrationStrategy: 0,
  assignTableName: null,
  deleteFlag: 0,
  viewTemplate: JSON.stringify({
    tableConfig: {
      // pageSize: 10,
      // pageNum: 1,
      isPage: true,
      type: ['selection', 'index'],
    },
    tableTopHandleBox: [
      { text: '创建', showtype: 'text || button', triggerShowType: 'el-drawer', sceneKey: 'create' },
      { text: "批量删除", showType: "confirm", multipleSelection: true, multipleSelectionKey: "id", message: "确认批量 删除?", title: "删除", url: "/del/id" },
    ],
    searchConfig: {
      sceneOptions: [
        'name', // mappingClassField
        'status'
      ],
      showLabel: true || false,
      labelWidth: '123px'
    },
    
    createConfig: {
      sceneOptions: [
        'name',
        'status'
      ],
      rules: [],
      labelWidth: "",
    },
    editConfig: {
      sceneOptions: [
        { mappingClassField: "name", placeholder: "请输入团队标签名称", label: "团队标签名称" },
        { mappingClassField: "principal", placeholder: "请输入负责人", width: "220px", label: "负责人" },
        { mappingClassField: "userSize", placeholder: "请输入团队成员", width: "220px", label: "团队成员" },
        { mappingClassField: "status", placeholder: "请输入状态", width: "220px", label: "状态" },
        { mappingClassField: "creator", placeholder: "请输入创建人", width: "220px", label: "创建人" },
      ],
      rules: [],
      labelWidth: "",
      disabled: []
    },

  }),
  // },
  attributes: [
    {
      mappingClassField: "id",
      columnLabel: "团队标签ID",
      columnUiPlugin: JSON.stringify({
        sortable: true,
      }),
      validatedPlugin: "",
      columnUiCss: "",
      sortIndex: 1,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "name",
      columnLabel: "团队标签名称1",
      columnUiPlugin: JSON.stringify({
        compName: "input",
        compConfig: {},
        searchConfig: {
          label: '',
          value: '',
          rules: [],
          required: ''
        },
        createConfig: {
          required: '',
          value: '1111',
          label: '团队标签名称'
        },
        editConfig: {
          required: '',
          value: '1111',
          label: '团队标签名称'
        },
        tableConfig: {
          width: '223px',
          sortable: '',
          type: '',
          align: 'right',
          plugin: [
            { text: "", showType: 'el-switch',inactive: '', active: '' },
          ]
        },
        // "requiredMessage": "姓名不能为空",
      }),
      columnUiCss: "",
      validatedPlugin: "input",
      sortIndex: 2,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "principal",
      columnLabel: "负责人",
      columnUiPlugin: JSON.stringify({
        "compName": "input",
        "clearable": true,
        "model": "principal",
        "label": "",
        searchwidth: '200px',
        createwidth: '300px',
        // options: [{ name: "男", id: 1 }, { name: "女", id: 2 }],
        tableColumnConfig: { width: "150px", align: "center", "label": "负责人" }
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "userSize",
      columnLabel: "团队成员",
      columnUiPlugin: JSON.stringify({
        "compName": "input",
        "clearable": true,
        "model": "userSize",
        "label": "",
        tableWidth: "50px",
        // options: [{ name: "男", id: 1 }, { name: "女", id: 2 }],
        // optionsLabel: "name",
        // optionsValue: "id",
        tableColumnConfig: { width: "150px", align: "center", "label": "团队成员" }
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "status",
      columnLabel: "状态",
      columnUiPlugin: JSON.stringify({
        compName: "select",
        compConfig: {
          options: [{ name: "启用", id: 1 }, { name: "禁用", id: 2 }],
          optionsLabel: "name",
          optionsValue: "id",
          url: {
            url: "/a/b/c",
            method: "get"
          },
          
        },
        tableConfig: {
          width: '223px',
          sortable: '',
          type: '',
          align: 'right',
          plugin: [
            { text: "", showType: 'el-switch',inactive: '', active: '' },
          ]
        },
        
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "creator",
      columnLabel: "创建人",
      columnUiPlugin: JSON.stringify({
        "compName": "input",
        "clearable": true,
        "model": "creator",
        "label": "",
        // options: [],
        // url: {
        //   url: "/a/b/c",
        //   method: "get"
        // },
        tableColumnConfig: { width: "160px", align: "center", "label": "创建人" }
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "createTime",
      columnLabel: "创建时间",
      columnUiPlugin: JSON.stringify({
        
        "compName": "date-picker",
        "clearable": true,
        "model": "",
        "label": "",
        type: "datetimerange",
        options: [],
        url: {
          url: "/a/b/c",
          method: "get"
        },
        tableColumnConfig: { width: "150px", align: "center", "label": "创建时间" }
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    },
    {
      mappingClassField: "handle",
      columnLabel: "操作",
      columnUiPlugin: JSON.stringify({
        tableConfig: {
          slotName: 'createTime',
          width: '223px',
          sortable: '',
          type: '',
          align: 'right',
          plugin: [
            { text: "编辑", showType: 'el-button', triggerShowType: "el-dialog", title: "修改", width: "40%", sceneKey: "edit", },
            { text: "删除", showType: 'el-button', triggerShowType: "confirm", message: "确认删除此条数据?", title: "删除", }
          ]
        }
      }),
      columnUiCss: "",
      validatedPlugin: "",
      sortIndex: 3,
      showInList: 1,
      showInQuery: 1,
      desp: "",
      deleteFlag: 0
    }
  ]
};