import React from 'react';
import { Row, Col, Button } from 'antd';
import classnames from 'classnames';
import * as R from 'ramda';
import './style.less';

interface PropsType {
  prefixCls?: string
  title?: string
  dataSource?: any[]
}

export enum detailStatus {
  '分配失败' = -1,
  '申请中',
  '处理成功',
  '暂停中',
  '已释放'
}

export enum detailStatusColor {
  'error' = -1,
  'default' = 0 | 2 | 3,
  'success' = 1,
}

const OrderDetail: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-order-detail',dataSource = [] } = props;
  const allSuccessful = R.find(R.propEq('status', -1))(dataSource) === undefined;
  const closeOrTryAgain = allSuccessful ?
    <Col span={4}><Button type='primary'>确定</Button></Col> :
    <Col span={4}><Button type='primary'>重试</Button></Col>
  
  const detailList = dataSource.map((r,key) =>
    (<Row className={classnames(`${prefixCls}-list-item`)} key={key}>
      <Col span={4}>{r.cid || '-'}</Col>
      <Col className={classnames(`${prefixCls}-${detailStatusColor[r.status]}`)}>{detailStatus[r.status]}</Col>
      </Row>
    )
  )
  
  return (
    <>
      <Row className={classnames(prefixCls)}>
        <Col className={classnames(`${prefixCls}-title`)}>{props.title}</Col>
        <Col className={classnames(`${prefixCls}-list`)}>{detailList}</Col>
        <Col>
          <Row>
            {closeOrTryAgain}
            <Col span={4}><Button type='primary' ghost>取消</Button></Col>
          </Row>
        </Col>
      </Row>
    </>
  )
  
}

export default OrderDetail;
