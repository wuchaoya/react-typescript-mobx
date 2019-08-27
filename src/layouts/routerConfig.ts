import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ResetPassword from '../pages/ResetPassword';
import Buy from '../pages/Buy';
import Order from '../pages/Order';

export default [
  {
    path: '/',
    component: SignIn,
    exact: true,
  },
  {
    path: '/SignUp',
    component: SignUp,
  },
  {
    path: '/ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/Buy',
    component: Buy,
  },
  {
    routers: [
      {
        path: '/List/Order',
        component: Order,
      },
      {
        path: '/List/Vas',
        component: Order,
      }
    ]
  }
  
];