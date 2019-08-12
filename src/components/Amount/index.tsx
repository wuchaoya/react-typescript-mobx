/**
 * 标题
 */
import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import './style.less';

export interface PropsType {
  sum?: number;
  onClick?:  React.MouseEventHandler<HTMLElement>;
  prefixCls?: string
  size?: 'small' | 'large',
  className?: string
}


const Amount: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-amount', sum, size = 'large', className, onClick } = props;
  
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
  });
  
  return (
    <div className={classes}>
      <span className={classnames(`${prefixCls}-description`)}>实付金额</span>
      <span className={classnames(`${prefixCls}-sum`)}>{sum}</span>
      <span className={classnames(`${prefixCls}-description`)}>元</span>
      <Button onClick={onClick} className={classnames(`${prefixCls}-button`)} type='primary'>确定支付</Button>
    </div>
  )
  
}

export default Amount;