import {mobileRule} from '../../utils/RegExps';
export const TIME = {
  WAIT_TIME : 60,
  COUNT_DOWN_TIME : 1000
};

export const RULES = {
  PHONE:mobileRule
};

export const TEXT = {
  COUNT_DOWN_DEFAULT_CONTENT: '获取验证码',
  COUNT_DOWN_TIP: '重新获取',
  COUNT_DOWN_PENDING: '发送中...'
};

export const ERROR_CODE = {
  PHONE_EMPTY: '手机号不能为空',
  PHONE_ERROR: '请输入正确格式的手机号',
};