/**
 * 标题
 */
import React from 'react';
import classnames from 'classnames';

import './style.less';

export interface PropsType {
  title: string
  subtitle?: string
}

export interface Props {
  prefixCls?: string;
}

const Title: React.FC<PropsType & Props> = props => {
  
  const {title, subtitle, prefixCls = 'gc-title'} = props;
  
  return (
    <div className={classnames(prefixCls)}>
      <span className={classnames(`${prefixCls}-title`)}>{title}</span>
      <span className={classnames(`${prefixCls}-subtitle`)}>{subtitle}</span>
    </div>
  )
  
}

export default Title;