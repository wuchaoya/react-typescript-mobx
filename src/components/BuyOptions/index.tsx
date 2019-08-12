/**
 * 购买选项
 */
import React from 'react';
import { Select, Row, Col, InputNumber, Radio } from 'antd';
import classnames from 'classnames';
import './style.less';

export interface PropsType {
  prefixCls?: string
  className?: string
  dataSource?: any[],
  select?: any
}

// 支付类型
export enum payType {
  Alipay = 1,
  Wechat = 9
}

const BuyOptions: React.FC<PropsType> = props => {
  
  const { prefixCls = 'gc-buy-options', className, dataSource = [] } = props;
  
  const classes = classnames(prefixCls, className);
  
  const SelectOptions = dataSource.map( r => (
    <Select.Option key={r.id} value={r.id}>{r.title}</Select.Option>
  ))
  
  return (
    <div className={classes}>
      <Row>
        <Col>请选择套餐</Col>
        <Col>
          <Select {...props.select} style={{ width: 120 }}>{SelectOptions}</Select>
        </Col>
      </Row>
      <Row>
        <Col>请输入购买个数</Col>
        <Col>
          <InputNumber/>
        </Col>
      </Row>
      <Row>
        <Col>请选择支付方式</Col>
        <Col>
          <Radio.Group>
            <Radio value={payType.Alipay}>支付宝支付</Radio>
            <Radio value={payType.Wechat}>微信支付</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  )
  
}

export default BuyOptions;