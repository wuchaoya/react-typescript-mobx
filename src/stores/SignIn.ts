import {observable,action } from 'mobx';
import * as stores from '../stores';

class SignIn {
  
  @observable title:string
  
  
  @action.bound routerPush () {
    stores.history.push('/SignUp')
  }
  
}

export default SignIn;