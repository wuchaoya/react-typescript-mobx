/**
 * 分组
 */
import React from 'react';
import { Select } from 'antd';
import {SelectProps} from 'antd/lib/select';
import './style.less';

export interface PropsType {
  className?: string;
  prefixCls?: string;
  dataSource: any []
}


const Group: React.FC<PropsType & SelectProps> = props => {
  
  const { prefixCls = 'gc-group',  dataSource = [] } = props;
  return (
    <>
    <Select {...props} className={prefixCls} style={{ width: 120 }}>
      {dataSource.map(r => <Select.Option key={r.id} value={r.id}>{r.groupName}</Select.Option>)}
    </Select>
    </>
  )
  
}

export default Group;