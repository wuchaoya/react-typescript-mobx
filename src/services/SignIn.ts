import request from '../utils/request';


/**
 * 登录
 * mobile 用户帐号
 * password 登录密码
 */

export async function login (params: object) {
  return request(`/pub/user/login`, {
    method: 'POST',
    requestType: 'form',
    data: params,
  })
}

/**
 * 获取用户信息
 * @param params{mobile: 手机号}
 * @returns {Promise<R>}
 */
export async function getUserInfo (params:object) {
  return request(`/pub/user/user_info`, {
    method: 'POST',
    requestType: 'form',
    data: params,
  })
}