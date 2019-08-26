import {action, observable} from 'mobx';
import {testAPI, getDevicePlayInfo} from '../services/global';
import { toHump } from '../utils/Conversion';

export interface devicePlayInfoType {
  accessToken: string;
  appId: string;
  packageName: string;
  cid: string;
}

class GlobalStore {
  
  @observable devicePlayInfo:devicePlayInfoType
  
  @action.bound async getDevicePlayInfo (deviceId: number) {
    let response = await getDevicePlayInfo({serviceId: deviceId});
    if (response.error) return;
    let result: any = {};
    Object.keys(response.result).forEach((key) => {
      console.log(response.result[key],toHump(key))
      result[toHump(key)] = response.result[key]
    })
    this.devicePlayInfo = result
  }
  
  @action.bound async testAPI () {
    let response = await testAPI();
    if (response.error) return;
  }
  
}

export default GlobalStore;