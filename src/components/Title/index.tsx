/**
 * 标题
 */
import React from 'react';
import classnames from 'classnames';

import './style.less';

export interface PropsType {
  title: string
  subtitle?: string
  center?: boolean
  titleColor?: string
  titleNormal?: boolean
}

export interface Props {
  prefixCls?: string;
}

const Title: React.FC<PropsType & Props> = props => {
  
  const {title, center,titleNormal, subtitle, prefixCls = 'gc-title'} = props;
  return (
    <div className={classnames(prefixCls,{[`${prefixCls}-center`]: center})}>
      <span className={classnames(`${prefixCls}-title`,{[`${prefixCls}-title-normal`]: titleNormal})}>{title}</span>
      <span className={classnames(`${prefixCls}-subtitle`)}>{subtitle}</span>
    </div>
  )
  
}

export default Title;