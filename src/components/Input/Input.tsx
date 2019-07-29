
import React from 'react';
import { Input as AInput} from 'antd';
import classnames from 'classnames';

import './style.less';

export interface PropsType extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefixCls?: string;
}

const Input: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-input'} = props;
  
  return <AInput {...props} className={classnames(prefixCls)}/>
  
}

export default Input;