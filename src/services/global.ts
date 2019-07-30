import request from '../utils/request';


/**
 * 获取验证码
 * mobile 用户帐号
 * type 类型 {1：绑定，2：忘记密码，3：手机号注册，5：修改密码，6：手机号登录，7：解除绑定手机 }
 */

export async function getvcode (params: {mobile: string, type: number}) {
  window.localStorage.setItem('headerData', JSON.stringify({mobile: params.mobile}))
  return request(`/pub/user/vcode`, {
    method: 'POST',
    requestType: 'form', // post请求时数据类型
    data: params,
  })
}