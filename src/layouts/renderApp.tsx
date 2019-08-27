import React from 'react';
import { Router } from 'react-router';
import {history} from '../stores'
import renderRoutes from './renderRoutes';
import routes from './routerConfig';

// path不区分大小写
const BasicLayout: React.FC = () => {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  )
}

export default BasicLayout;