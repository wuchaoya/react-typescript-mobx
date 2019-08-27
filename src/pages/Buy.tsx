import React,{useEffect} from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import GlobalStore from '../stores/GlobalStore';
import BuyStore from '../stores/BuyStore';
import Amount from '../components/Amount';
import BuyOptions from '../components/BuyOptions';
import ChangeHook from '../components/ChangeHook';
import Nav from '../components/Nav';

interface PropsType {
  GlobalStore: GlobalStore,
  BuyStore: BuyStore
}

const Buy: React.FC<PropsType> = inject('GlobalStore','BuyStore') (observer(props => {
  
  const {BuyStore} = props;
  
  let active = ChangeHook(null);
  
  console.log(active);
  
  useEffect(() => {
    (async() => await BuyStore.getPricesList({product_id: 2,scenes: 1}))()
  },[BuyStore])
  
  return (
    <>
    <Nav/>
    <BuyOptions dataSource={toJS(BuyStore.pricesList)} select={active} />
    <Amount/>
    </>
  )
  
}))

export default Buy;
