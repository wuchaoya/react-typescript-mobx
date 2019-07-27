import request from '../utils/request';


/**
 * 登录
 * mobile 用户帐号
 * password 登录密码
 */

export async function login (params: object) {
  return request(`/pub/user/login`, {
    method: 'POST',
    requestType: 'form', // post请求时数据类型
    data: params,
  })
}