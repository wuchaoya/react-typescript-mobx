import {observable,action} from 'mobx';
import { getPricesList } from '../services/Buy';

class BuyStore {
  
  @observable pricesList: any[] = []
  
  
  @action.bound async getPricesList (params: object) {
    let response = await getPricesList(params);
    if (response.error) return;
    this.pricesList = response.result.price_list
  }
  
}

export default BuyStore;