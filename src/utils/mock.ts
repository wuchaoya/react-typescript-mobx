
enum codeMsg {
  '成功' = 10000,
  '失败' = 50001,
  '非法参数' = 50002,
  '非法支付参数' = 50003,
  '超过最大购买数量' = 50004
}

function successRes (data: object | string) {
  const successCode = 10000;
  return {code: successCode, msg: codeMsg[successCode], result: data}
}

function errorRes (errCode: number, msg: string) {
  const code = errCode || 50001;
  const msg = msg || codeMsg[code];
  return {code, msg}
}

module.exports = {
  successRes,
  errorRes,
  codeMsg
}