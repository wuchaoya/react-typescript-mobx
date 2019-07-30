import request from '../utils/request';


/**
 * 注册
 * mobile 用户帐号
 * password 登录密码
 * code 验证码
 */

export async function signUp (params: object) {
  return request(`/pub/user/register`, {
    method: 'POST',
    requestType: 'form', // post请求时数据类型
    data: params,
  })
}