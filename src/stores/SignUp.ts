import {observable,action} from 'mobx';
import {message} from 'antd';
import * as R from 'ramda'
import { signUp } from '../services/SignUp';
import { ObjectType } from './SignIn';
import {history} from '../stores';
import {checkMobile, checkPassword, checkVcode} from '../utils/RegExps';

class SignUp {
  
  @observable accountInfo: ObjectType = {
    mobile: '',
    password: '',
    code: '',
    passwordRepeat: ''
  }
  
  @action.bound setAccountInfo(key: string, value: string) {
    this.accountInfo[key] = value;
  }
  
  @action.bound async checkAccountInfo() {
    console.log(this.accountInfo.code);
    if(!checkMobile(this.accountInfo.mobile)) {
      message.warning('请输入正确手机号');
      return false
    }
    if(!checkPassword(this.accountInfo.password)) {
      message.warning('请输入6~12位密码');
      return false;
    }
    if (!checkVcode(this.accountInfo.code)) {
      message.warning('验证码为4位纯数字');
      return false;
    }
    if (this.accountInfo.password !== this.accountInfo.passwordRepeat ) {
      message.warning('两次密码输入不一致');
      return false;
    }
    
    await this.signUp();
  }
  
  @action.bound async signUp () {
    const response = await signUp (R.omit(['passwordRepeat'],this.accountInfo));
    if (response.error) return;
    history.push('/');
  }
  
}

export default SignUp;