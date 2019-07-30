import {observable,action} from 'mobx';

class Global {
  
  @observable title:string
  
  @action.bound setTitle (title: string) {
    this.title = title;
  }
  
}

export default Global;