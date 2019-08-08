import {observable,action} from 'mobx';

class GlobalStore {
  
  @observable title:string
  
  @action setTitle (title: string) {
    this.title = title;
  }
  
}

export default GlobalStore;