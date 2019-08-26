import React,{useEffect} from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import GlobalStore from '../stores/GlobalStore';
import OrderStore from '../stores/OrderStore';
import OrderTable from '../components/Table/OrderTable';
import apiListProxy from '../Proxys/apiListProxy';
import Modali, { useModali } from '../components/Modal';

interface PropsType {
  GlobalStore: GlobalStore,
  OrderStore: OrderStore
}

const Order: React.FC<PropsType> = inject('GlobalStore','OrderStore') (observer(props => {
  
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
  });
  
  const onClickOrderDetail = async (params: { priceType: number; orderId: any; }) => {
    OrderStore.setOrderDetailTitle(params.priceType)
    await OrderStore.getOrderDetail({orderId:params.orderId})
    toggleCompleteModal()
  }
  
  const {OrderStore,GlobalStore} = props;
  
   useEffect(() => {
     (async() => await OrderStore.getOrderList())();
     (async() => await GlobalStore.testAPI())();
   },[OrderStore, GlobalStore])
  
  return (
    <>
     <OrderTable
       actions={{onClickOrderDetail: onClickOrderDetail,}}
       dataSource={toJS(OrderStore.orderList).map(apiListProxy)}
     />
    <Modali.Modal {...completeModal}>
      <Modali.OrderDetail dataSource={OrderStore.orderDetail} title={OrderStore.orderDetailTitle} />
    </Modali.Modal>
    </>
  )
  
}))

export default Order;
