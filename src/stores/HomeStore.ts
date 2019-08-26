import {observable,action} from 'mobx';
import { getGameList , getAttachHistory, getGroupList, getDeviceList } from '../services/Home';
import Store from './index';

class HomeStore {
  
  // 游戏列表
  @observable gameList: any[] = []
  
  @observable groupList: any[] = []
  
  @observable deviceList: any[] = []
  
  // 当前选中分组
  @observable activeGroup: number
  
  // 总存储空间大小
  @observable allSpace: string
  
  // 已使用空间大小
  @observable usedSpace: string
  
  // 历史记录列表
  @observable historyList : any[]
  
  // 获取分组列表
  @action.bound async getGroupList () {
    let response = await getGroupList();
    if (response.error) return;
    this.groupList = response.result.group_list
  }
  
  // 获取设备列表
  @action.bound async getDeviceList (groupId: number) {
    let response = await getDeviceList({groupId});
    if (response.error) return;
    this.deviceList = response.result.group_device_list
  }
  
  @action.bound async selectGroup (groupId: number) {
    this.activeGroup = groupId;
    await this.getDeviceList(groupId);
  }
  
  @action.bound async devicePlay (deviceId: number) {
    await Store.GlobalStore.getDevicePlayInfo(deviceId)
  }
  
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