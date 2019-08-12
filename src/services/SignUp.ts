import request from '../utils/request';
import {ObjectType} from '../stores/SignInStore';

/**
 * 注册
 * mobile 用户帐号
 * password 登录密码
 * code 验证码
 */

export async function signUp (params: Pick<ObjectType, string | number>) {
  window.localStorage.setItem('headerData', JSON.stringify({mobile: params.mobile}))
  return request(`/pub/user/register`, {
    method: 'POST',
    requestType: 'form',
    data: params,
  })
}