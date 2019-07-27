/**
 * 标题
 */
import React from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.less';

export interface PropsType {

}

export interface Props {
  prefixCls?: string;
}

const Toolbar: React.FC<PropsType & Props> = props => {
  
  const {prefixCls = 'gc-toolbar'} = props;
  
  return (
    <div className={classnames(prefixCls)}>
      <Checkbox className={classnames(`${prefixCls}-checkbox`)}>记住密码</Checkbox>
      <Link className={classnames(`${prefixCls}-link`)} to='/404'>忘记密码</Link>
    </div>
  )
  
}

export default Toolbar;