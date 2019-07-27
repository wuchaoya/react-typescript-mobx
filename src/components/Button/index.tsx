/**
 * 按钮
 */
import React from 'react';
import classnames from 'classnames';
import { Button as AButton } from 'antd';

import {ButtonProps} from 'antd/lib/button';

import './style.less';

export interface Props {
  prefixCls?: string;
}

const Button: React.FC<Props & ButtonProps > = props => {
  
  const {children, prefixCls = 'gc-button'} = props;
  
  return <AButton {...props} className={classnames(prefixCls)}>{children}</AButton>
  
}

export default Button;