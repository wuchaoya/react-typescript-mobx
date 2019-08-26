/**
 * 设备
 */
import React from 'react';
import {SelectProps} from 'antd/lib/select';
import './style.less';

export interface PropsType {
  className?: string;
  prefixCls?: string;
  dataSource: any [];
  onClick?: React.MouseEventHandler<HTMLElement>
}


const Device: React.FC<PropsType & SelectProps> = props => {
  
  const { prefixCls = 'gc-device',  dataSource = [], onClick = () => {} } = props;
  return (
    <>
    {dataSource.map(r => <div onClick={() => onClick(r)} className={prefixCls} key={r.id}>{r.cid}</div>)}
    </>
  )
  
}

export default Device;