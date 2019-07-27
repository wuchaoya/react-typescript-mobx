import CryptoJS from 'crypto-js';
import Base64 from './Base64';

const signKey = 'T9Y606V15U6FR8GB';

/**
 * 获取签名
 */
export default class Sign {
  
  /**
   * 签名方法
   * @param parameter 接口参数
   * @param constParameter 固定参数
   * @returns {string}
   */
  static encrypt (parameter: any, constParameter: any) {
    
    let constStr = constParameter.mobile + constParameter.clientId + constParameter.timestamp + signKey;// 手机号、设备ID、时间戳、签名KEY
    let mergeParameter = parameter;
  
    // - 拼接参数列表为字符串数组
    let parameterArray = Object.keys(mergeParameter)
    // - 字符串数组升序排列
    .sort((a, b) => {
      let index = 0;
      let i = a.length > b.length ? b.length: a.length
      for (index; index < i; index ++) {if (a[index] !== b[index]) {break;}}
      return a.charCodeAt(index) - b.charCodeAt(index)
    })
    // - 字符串数组使用&连接
    .map((item, index) => {
      return (item + '=' + mergeParameter[item] + (index === Object.keys(mergeParameter).length - 1 ? '': '&'))
    });
    
    // - 使用MD5签名
    constStr += this.ArrarToString(parameterArray)
    let hash = CryptoJS.MD5(Base64.encode(constStr));
    return hash.toString();
    
  }
  
  /**
   * 数组转字符串
   * @param arr
   * @returns {string}
   * @constructor
   */
  static ArrarToString (arr: any []) {
    let str = '';
    arr.forEach((item) => {
      str += item
    })
    return str;
  }
  
}