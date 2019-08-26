import request from '../utils/request';
import { stringify } from 'qs';

/**
 * 获取分组列表
 * @returns {Promise<void>}
 */
export async function getGroupList () {
  return request(`/api/user/group/list`, {
    method: 'GET',
    requestType: 'form',
    data: {}
  })
}

/**
 * 获取组内设备列表
 * @param params
 * @returns {Promise<R>}
 */
export async function getDeviceList (params: object) {
  return request(`/api/user/group/device/list?${stringify(params)}`, {
    method: 'GET',
    requestType: 'form',
    data: params
  })
}

/**
 * 查询可用游戏列表
 */

export async function getGameList () {
  return request(`/api/user/attach/game/list`, {
    method: 'GET',
    requestType: 'form',
    data: {},
  })
}

/**
 * 查询附件上传记录
 */
export async function getAttachHistory () {
  return request(`/api/user/attach/history`, {
    method: 'GET',
    requestType: 'form',
    data: {},
  })
}

