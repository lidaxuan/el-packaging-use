/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-07 11:00:04
 * @FilePath: /bus-boss-refact-view/src/api/nomal/src/workOrder.js
 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-06 17:44:39
 * @FilePath: /bus-boss-refact-view/src/api/order/src/workOrder.js
 */
const workOrder = {
  // 获取工单内容区
  getOrderContent: {
    url: '/sheet/inner/content',
    method: 'get',
    type: 'front'
  },
  //内容区附件
  getSheetFile: {
    url: '/sheet/inner/sheet-file',
    method: 'get',
    type: 'front'
  },
  // 详情获取关联工单
  getRelativeOrder: {
    url: '/sheet/sheetInfoRefList',
    method: 'post',
    type: 'front'
  },
  // 输入编号获取工单信息
  getSheetInfoMessage: {
    url: '/sheet/sheetInfoMessage',
    method: 'post',
    type: 'front'
  },
  // 关联工单
  assSheetInfoRef: {
    url: '/sheet/assSheetInfoRef',
    method: 'post',
    type: 'front'
  },
  // 取消关联工单
  disAssInfoRef: {
    url: '/sheet/disAssInfoRef',
    method: 'post',
    type: 'front'
  },
  // 工单记录
  getRecordIPage: {
    url: '/sheet/infoAction/getRecordIPage',
    method: 'post',
    type: 'front'
  },
  // 操作记录
  getOperationIPage: {
    url: '/sheet/infoAction/getOperationIPage',
    method: 'post',
    type: 'front'
  },
  // 工单属性信息获取
  getOrderProperty: {
    url: '/sheet/inner/property',
    method: 'get',
    type: 'front'
  },
  // 工单属性 工单优先级change
  changePriority: {
    url: '/sheet/inner/priority',
    method: 'post',
    type: 'front'
  },
  // 客户信息获取
  getOrderCustomerMsg: {
    url: '/sheet/customerMessage',
    method: 'post',
    type: 'front'
  },
  // 工单解决、驳回
  saveResolveRejection: {
    url: '/sheet/infoAction/saveResolveRejection',
    method: 'post',
    type: 'front'
  },
  // 回复工单
  saveWorkOrderReply: {
    url: '/sheet/infoAction/saveWorkOrderReply',
    method: 'post',
    type: 'front'
  },
  // 上一条/下一条
  orderTurnPage: {
    url: '/sheet/inner/turnPage',
    method: 'post',
    type: 'front'
  },
  // 工单受理
  orderAccept: {
    url: '/sheet/inner/accept',
    method: 'post',
    type: 'front'
  }
}
export default workOrder;