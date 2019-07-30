import React from 'react';
import { Checkbox } from 'antd';
import {CheckboxProps} from 'antd/lib/checkbox';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.less';

export interface PropsType {

}

export interface Props extends CheckboxProps {
  prefixCls?: string;
}

const Toolbar: React.FC<PropsType & Props> = props => {
  
  const {prefixCls = 'gc-toolbar'} = props;
  
  return (
    <div className={classnames(prefixCls)}>
      <Checkbox {...props} className={classnames(`${prefixCls}-checkbox`)}>记住密码</Checkbox>
      <Link className={classnames(`${prefixCls}-link`)} to='/ResetPassword'>忘记密码</Link>
    </div>
  )
  
}

export default Toolbar;