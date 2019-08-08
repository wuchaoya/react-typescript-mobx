import {observable,action} from 'mobx';
import { getGameList , getAttachHistory } from '../services/Home';

class HomeStore {
  
  // 游戏列表
  @observable gameList: any[] = []
  
  // 总存储空间大小
  @observable allSpace: string
  
  // 已使用空间大小
  @observable usedSpace: string
  
  // 历史记录列表
  @observable historyList : any[]
  
  // 获取上传游戏列表
  @action.bound async getGameList () {
    let response = await getGameList();
    if (response.error) return;
    this.gameList = response.result.game_list
  }
  
  // 获取上传历史记录
  @action.bound async getAttachHistory () {
    const response = await getAttachHistory();
    if (response.error) return;
  }
  
}

export default HomeStore;