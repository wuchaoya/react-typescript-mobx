
import React from 'react';
import { Table, Button } from 'antd';
import moment from 'moment';
import {TableProps,ColumnProps} from 'antd/lib/table';
import yuan from '../../utils/yuan';

export interface User {
  key: number;
  name: string;
  dataIndex: string,
  align: string
}

export interface PropsType  {
  prefixCls?: string;
  actions?: any;
}

export interface listItemType {
  priceType: number
}

export enum priceType {
  '购买' = 1,
  '续费'
}

export enum orderType {
  '免费' = 0,
  '付费',
  '赠送'
}

export enum statusType {
  '未支付' = 0,
  '已支付',
  '已完成'
}

const OrderTable: React.FC<PropsType & TableProps<User & listItemType>> = props => {
  
  const columns:ColumnProps<User&listItemType>[] =  [
    {
      title: '购买时间',
      dataIndex: 'payTime',
      key: 'payTime',
      width: 100,
      align:'center',
      render: (time: number) => moment(time).format('YYYY-MM-DD HH:mm')
    },
    {
      title: '商品名称',
      dataIndex: 'title',
      key: 'title',
      align:'center',
      width: 140
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      key: 'orderType',
      align:'center',
      width: 100,
      // 先看订单类型是否为免费，再看资费类型是购买还是付费
      render: (type,record) => type === 1 ? priceType[record.priceType] : orderType[type]
    },
    {
      title: '订单号',
      key: 'orderId',
      dataIndex: 'orderId',
      align:'center',
      width: 220
    },
    {
      title: '购买单件(元)',
      key: 'singlePrice',
      dataIndex: 'singlePrice',
      align:'center',
      width: 120,
      render: price => yuan(price)
    },
    {
      title: '购买个数',
      key: 'totalNum',
      dataIndex: 'totalNum',
      align:'center',
      width: 100
    },
    {
      title: '实付金额(元)',
      key: 'totalPrice',
      dataIndex: 'totalPrice',
      align:'center',
      width: 120,
      render: price => yuan(price)
    },
    {
      title: '交易结果',
      key: 'status',
      dataIndex: 'status',
      align:'center',
      width: 100,
      render: status => statusType[status]
    },
    {
      title: '部署结果',
      key: 'ticketStatus',
      dataIndex: 'ticketStatus',
      align:'center',
      width: 100
    },
    {
      title: '操作',
      key: 'action',
      align:'center',
      width: 120,
      render: (record) => <Button onClick={() =>props.actions.onClickOrderDetail(record)} type="link">查看详情</Button>
    },
  ];
  
  return <Table scroll={{x: 1200}} rowKey='id' columns={columns} dataSource={props.dataSource} />
  
}

export default OrderTable;