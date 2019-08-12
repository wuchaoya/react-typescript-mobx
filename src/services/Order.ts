import request from '../utils/request';
import { stringify } from 'qs';

/**
 * 查询订单列表
 */

export async function getOrderList () {
  return request(`/api/bill/device/orders`, {
    method: 'GET',
    requestType: 'form',
    data: {},
  })
}

/**
 * 订单详情
 * @returns {Promise<R>}
 */
export async function getOrderDetail (params: object) {
  return request(`/api/saas/order/phone_detail?${stringify(params)}`, {
    method: 'GET',
    requestType: 'form',
    data: params,
  })
}
