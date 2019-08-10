import {observable,action} from 'mobx';
import { getOrderList, getOrderDetail } from '../services/Order';
import {priceType} from '../components/Table/OrderTable';

class OrderStore {
  
  @observable orderList: any[] = []
  
  @observable orderDetail: any[] = []
  
  @observable orderDetailTitle: string
  
  @action.bound async getOrderList () {
    let response = await getOrderList();
    if (response.error) return;
    this.orderList = response.result.order_list
  }
  
  @action.bound async getOrderDetail (params: object) {
    let response = await getOrderDetail(params);
    if (response.error) return;
    this.orderDetail = response.result
  }
  
  @action.bound setOrderDetailTitle (type: number) {
    this.orderDetailTitle = `${priceType[type]}详情`
  }
  
}

export default OrderStore;