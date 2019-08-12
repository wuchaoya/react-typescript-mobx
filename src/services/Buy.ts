import request from '../utils/request';
import { stringify } from 'qs';


/**
 * 价格点列表
 * @returns {Promise<R>}
 */
export async function getPricesList (params: object) {
  return request(`/api/bill/device/prices?${stringify(params)}`, {
    method: 'GET',
    requestType: 'form',
    data: params,
  })
}

/**
 * 获取支付url
 * @param params
 * @returns {Promise<R>}
 */
export async function getBuyUrl (params: object) {
  return request(`/api/bill/device/vas/buy`, {
    method: 'POST',
    requestType: 'form',
    data: params,
  })
}