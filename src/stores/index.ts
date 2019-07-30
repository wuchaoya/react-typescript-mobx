import {createBrowserHistory} from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Global from './Global';
import SignIn from './SignIn';
import SignUp from './SignUp';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();


// 同步路由信息
export const history = syncHistoryWithStore(browserHistory, routingStore);

export default {
  Global: new Global(),
  routing: routingStore,
  SignIn: new SignIn(),
  SignUp: new SignUp()
}