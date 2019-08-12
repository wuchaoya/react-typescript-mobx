import request from '../utils/request';


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