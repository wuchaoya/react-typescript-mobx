import {createBrowserHistory} from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Global from './Global';
import SignIn from './SignIn';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

export const history = syncHistoryWithStore(browserHistory, routingStore);

export default {
  Global: new Global(),
  routing: routingStore,
  SignIn: new SignIn()
}