const intention = {
  // 上传阿里云文件前获取必要的参数
  getAliyunToken:{
    url: "/common/sts/token",
    method: "get"
  },
  // 行业级联(新)
  getNewIndustry:{
    url: "/dict/industryComboBox",
    method: "get"
  },
  // 产品类型(新)
  getNewProductType:{
    url: "/dict/productComboBox",
    method: "get"
  },
  // 地域(新)
  getAreaList:{
    url: "/dict/areaComboBox",
    method: "get"
  },
  // 意向状态select
  getIntentionList:{
    url: "/dict/intentionStatus",
    method: "get"
  },
  // 产品线select
  getProductLinList:{
    url: "/dict/productLineComboBox",
    method: "get"
  },
  // 项目下拉框
  getProjectList:{
    url: "/dict/projectComboBox",
    method: "get"
  },
  // 任务状态
  getIntentionStatusList:{
    url: "/task/subStatus",
    method: "get"
  },
  //根据产品线获取产品select
  getProductByLine:{
    url: "/dict/findByproductLineCode",
    method: "get"
  },
  // 意向列表
  getIntentionTableList:{
    url: "/intention/page",
    method: "post"
  },
  // 实体公司下拉公司列表查询，ID(直等) 或 名字(模糊)
  getCompanyEntity:{
    url: "/companyEntity/queryCompanyList",
    method: "get"
  },
  // 关联公司
  refCompanyEntity:{
    url: "/intention/refCompanyEntity",
    method: "post"
  },
  // 新增实体公司
  addCompanyEntity:{
    url: "/companyEntity/addCompanyEntity",
    method: "post"
  },
  // 任务列表
  getTaskList:{
    url: "/task/taskVoPage",
    method: "post"
  },
  // 新增任务
  addTask:{
    url: "/task/opt/task/add",
    method: "post"
  },
  // 提交测试
  submitTest:{
    url: "/task/opt/test/submit",
    method: "post"
  },
  // 提交语料
  submitCorpus:{
    url: "/task/opt/submitData",
    method: "post"
  },
  // 提交资料
  submitSource:{
    url: "/task/opt/material/submit",
    method: "post"
  },
  // 终止学习
  endStudy:{
    url: "/task/opt/study/terminate",
    method: "post"
  },
  // 终止测试
  endTest:{
    url: "/task/opt/test/terminate",
    method: "post"
  },
  // 延期测试
  delayTest:{
    url: "/task/opt/test/delay",
    method: "post"
  },
  // 任务转移
  transferTask: {
    url: "/task/transfer",
    method: "post"
  },
  // 意向弹框详情
  getIntentionDetail: {
    url: "/intention/detail",
    method: "post"
  },
  // 意向详情列表
  getSaasCompany: {
    url: "/saas/company/pagination",
    method: "get"
  },
  // 意向详情列表 新增
  addSass: {
    url: "/saas/company/add",
    method: "post"
  },
  // 意向详情列表 编辑
  editSass: {
    url: "/saas/company/edit",
    method: "post"
  },
  // 获取二级行业
  getSecondIndustry: {
    url: "/saas/company/findIndustryByCompanyId",
    method: "get"
  },
  //未成交
  noDealReason: {
    url: "/saleNoDeal/opt/sale/noDealReason",
    method: "post"
  },

  //用量
  getDosageList:{
    url: "/consumption/customerUsageList",
    method: "get"
  },
  // 用量 数量总计
  getDosageListSum:{
    url: "/consumption/customerUsageCount",
    method: "get"
  },
  getBargainAccountList:{
    url: "/consumption/transCustomerList",
    method: "get"
  },
  getNewBargainAccountList:{
    url: "/contract/daily/bill/statistics/pagination",
    method: "get",
    type: "billing"
  },
  getCaseList: {
    url: "/taskRef/query/sample",
    method: "post"
  },
  //获取Saas公司渠道下拉框
  getSaasChannelList: {
    url: "/dict/findSaasChannel",
    method: "get"
  },

  // 个人看板模块
  getStudyingList:{
    url: "/saleBulletinBoard/studyBoard",
    method: "post"
  },
  getTestingList:{
    url: "/saleBulletinBoard/testBoard",
    method: "post"
  },
  getPersonalBargainList:{
    url: "/saleBulletinBoard/dealBoard",
    method: "post"
  },
  getPersonalDelinquentlist:{
    url: "/saleBulletinBoard/delinquentBoard",
    method: "post"
  },
  getPersonalNoDealBoardlist:{
    url: "/saleBulletinBoard/noDealBoard",
    method: "post"
  },
  getPersonalStopBoardlist:{
    url: "/saleBulletinBoard/stopBoard",
    method: "post"
  },
  getPersonalRechargeBoardlist:{
    url: "/saleBulletinBoard/rechargeBoard",
    method: "post"
  }
};
export default intention;
