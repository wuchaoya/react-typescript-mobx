import React from 'react';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import {history} from '../stores'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ResetPassword from '../pages/ResetPassword';
import Buy from '../pages/Buy';
import Order from '../pages/Order';

// path不区分大小写

const BasicLayout: React.FC = () => {
  return (
    <Router history={history}>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/SignUp' component={SignUp} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/ResetPassword' component={ResetPassword} />
      <Route exact path='/Order' component={Order} />
      <Route exact path='/Buy' component={Buy} />
    </Router>
  )
}

export default BasicLayout;