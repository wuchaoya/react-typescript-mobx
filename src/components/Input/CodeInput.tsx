import React from 'react';
import { Button } from 'antd';
import Input from './index';
import classnames from 'classnames';

import './style.less';

export interface PropsType extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefixCls?: string;
}

const CodeInput: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-code-input'} = props;
  
  return (
    <div className={classnames(prefixCls)}>
      <Input placeholder='请输入验证码'/>
      <Button className={classnames(`${prefixCls}-button`)} type='link'>立即验证</Button>
    </div>
  )
  
}

export default CodeInput;