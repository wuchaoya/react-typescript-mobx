import {createBrowserHistory} from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import GlobalStore from './GlobalStore';
import SignInStore from './SignInStore';
import SignUpStore from './SignUpStore';
import HomeStore from './HomeStore';
import OrderStore from './OrderStore';
import BuyStore from './BuyStore';
import ResetPasswordStore from './ResetPasswordStore';


const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();


// 同步路由信息
export const history = syncHistoryWithStore(browserHistory, routingStore);

export default {
  GlobalStore: new GlobalStore(),
  routingStore: routingStore,
  SignInStore: new SignInStore(),
  SignUpStore: new SignUpStore(),
  ResetPasswordStore: new ResetPasswordStore(),
  HomeStore: new HomeStore(),
  OrderStore: new OrderStore(),
  BuyStore: new BuyStore()
}