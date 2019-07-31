import {observable, action} from 'mobx';
import {message} from 'antd';
import {history} from '../stores';
import {login, getUserInfo} from '../services/SignIn';
import {checkMobile, checkPassword} from '../utils/RegExps';

export interface ObjectType {
  [key: string]: string,
}

class SignInStore {
  
  // 记住密码
  @observable remember: boolean
  
  // 账号信息
  @observable accountInfo: ObjectType = {
    mobile: '',
    password: ''
  }
  
  @action.bound setRemember(remember: boolean) {
    window.localStorage.setItem('remember', String(remember));
    this.remember = remember;
  }
  
  @action.bound setAccountInfo(key: string, value: string) {
    this.accountInfo[key] = value;
  }
  
  @action.bound async login() {
    // 缓存账号信息，签名时候用到
    window.localStorage.setItem('headerData', JSON.stringify({mobile: this.accountInfo.mobile}));
    const response = await login(this.accountInfo);
    if(response.error) return;
    // 缓存登录信息，签名时用到
    window.localStorage.setItem('userInfo', response.result);
    history.push('/home');
  }
  
  @action.bound async getUserInfo() {
    const response = await getUserInfo({mobile: this.accountInfo.mobile})
    if(response.error) return;
    history.push('/home');
  }
  
  @action.bound async checkAccountInfo() {
    if(!checkMobile(this.accountInfo.mobile)) {
      message.warning('请输入正确手机号');
      return false
    }
    if(!checkPassword(this.accountInfo.password)) {
      message.warning('请输入正确手机号');
      return false;
    }
    const userInfo: string | null = window.localStorage.getItem('userInfo');
    const headerDataString: string | null = window.localStorage.getItem('headerData');
    const headerData = headerDataString ? JSON.parse(headerDataString) : {mobile: ''};
    // 记住密码状态 存在登录信息 缓存手机号与本次手机号一致
    if(this.remember && userInfo !== null && headerData.mobile === this.accountInfo.mobile) {
      await this.getUserInfo()
      return false;
    }
    await this.login();
  }
  
  @action.bound init() {
    // 获取记住密码状态
    const rememberString : string | null = window.localStorage.getItem('remember');
    const remember = rememberString ? Boolean(rememberString) : false;
    // 获取缓存的手机号
    const headerDataString: string | null = window.localStorage.getItem('headerData');
    const headerData = headerDataString ? JSON.parse(headerDataString) : {mobile: ''};
    // 设置初始值
    this.remember = remember ? Boolean(remember) : false;
    this.accountInfo.mobile = remember ? headerData.mobile : '';
    // 123456 仅用于输入框显示
    this.accountInfo.password = remember ? '123456' : '';
  }
  
  @action.bound routerPush() {
    history.push('/SignUp');
  }
  
}

export default SignInStore;