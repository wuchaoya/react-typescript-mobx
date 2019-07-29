export const mobileRule = /^[1][0-9]{10}$/
export const codeRule = /^[0-9]{4}$/
export const passwordRule = /^[A-Za-z0-9]{6,20}$/
export const oldPasswordRule =/^(?! )(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[A-Za-z0-9]{8,20}(?! )$/;
export const nameRule = /^[A-Za-z0-9\u4e00-\u9fa5]+$/

// 手机号
export function checkMobile (mobile: string) {
  return mobileRule.test(mobile)
}

// 密码
export function checkPassword (password: string) {
  return passwordRule.test(password)
}

// 验证码
export function checkVcode (vcode: string) {
  return codeRule.test(vcode)
}