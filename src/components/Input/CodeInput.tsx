import React from 'react';
import Input from './index';
import classnames from 'classnames';
import CountDown from '../CountDown';

import './style.less';

export interface PropsType extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefixCls?: string;
  phone:string
}

const CodeInput: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-code-input', phone, onChange, value,} = props;
  
  return (
    <div className={classnames(prefixCls)}>
      <Input value={value} onChange={onChange} placeholder='请输入验证码'/>
      <CountDown
        isNeedValidatePhone={true}
        phone={phone}
        waitTime={60}
      />
    </div>
  )
  
}

export default CodeInput;