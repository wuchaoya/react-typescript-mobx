import {observable,action} from 'mobx';
import {login } from '../services/global';

class Global {
  
  @observable title:string
  
  @action.bound setTitle (title: string) {
    this.title = title;
  }
  
  @action.bound  async login () {
    await login({
      mobile: '18695912990',
      password: '123456'
    })
  }
  
  
}

export default Global;