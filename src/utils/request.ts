/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend, RequestOptionsInit } from 'umi-request';
import { notification, message } from 'antd';
import ClientId from './ClientId';
import Sign from './Sign';

// 元素隐式具有“任意”类型，因为索引表达式不是“数字”类型
export declare interface CategoriesMap {
  [key: string]: string;
}

const codeMessage: CategoriesMap = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  console.log(error);
  const { response } = error;
  if (response && response.status) {
    const errorText: string = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log(response);
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
  let newResponse: any = response;
  //newResponse.error = true;
  return newResponse;
};

/**
 * 请求头拦截方法
 * @param url
 * @param options
 * @returns {Promise<{options: {headers: {Content-Type: string, clientType: number, mobile: string, clientId: any, timestamp: Object, Sign: string, appKey: string}}}>}
 */
const interceptors = (url: string, options: RequestOptionsInit) => {
  
  let timestamp = (new Date()).valueOf();
  let clientId = ClientId();
  
  const headerData = window.localStorage.getItem('headerData')
  let data = headerData ? JSON.parse(headerData) : {mobile: ''}
  
  let userInfo = window.localStorage.getItem('userInfo')
  
  // 签名元素
  let signData = {clientType: 1, mobile: data.mobile, clientId: clientId, timestamp: timestamp}
  let pathArrar = ['/pub/user/login', '/pub/user/register', '/pub/user/forget','/pub/user/vcode']
  let headers: any =  {
    'Content-Type': 'application/x-www-form-urlencoded',
    'clientType': 1,
    'mobile': data.mobile,
    'clientId': clientId,
    'timestamp': timestamp,
    'Sign': Sign.encrypt(options.data, signData),
    'appKey': '5WtKrLZP',
  }
  
  if (pathArrar.indexOf(url) !== -1) {
    if (url === '/pub/user/vcode') {
      if (Number(options.data.type) === 5) {
        headers.authInfo = userInfo
      }
    }
  } else {
    headers.authInfo = userInfo
  }
  
  return (
    {
      options: {
        ...options,
        headers
      },
    }
  );
}


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// 请求前拦截
request.interceptors.request.use( interceptors );

request.interceptors.response.use((response, options) => {
  console.log(response);
  if (response.status !== 200) {
    return response
  }
  return new Promise(resolve => {
    response.json().then(res => {
      if (res.code !== 10000) {
        res.error = true
        message.error(res.result || res.msg)
      }
      resolve(res)
    })
  })
  
});

export default request;
