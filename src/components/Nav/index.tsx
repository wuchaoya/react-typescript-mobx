/**
 * 标题
 */
import React from 'react';
import { Menu, Row,Col } from 'antd';
import classnames from 'classnames';

import './style.less';

export interface PropsType {
  title?: string
  subtitle?: string
  center?: boolean
  titleColor?: string
  titleNormal?: boolean
}

export interface Props {
  prefixCls?: string;
}


const { SubMenu } = Menu;

const Title: React.FC<PropsType & Props> = props => {
  const { prefixCls = 'gc-nav', title = '爱云兔云手机群控制平台'} = props;
  return (
    <>
    <Row type="flex" justify="space-between" align="middle">
      <Col span={12}>
        <h1 className={classnames(`${prefixCls}-title`)}>{title}</h1>
      </Col>
      <Col span={10}>
        <Menu className={classnames(prefixCls)} mode="horizontal">
          <Menu.Item key="mail">
            设备管理
          </Menu.Item>
          <Menu.Item key="app">
            购买
          </Menu.Item>
          <SubMenu title='个人中心'>
            <Menu.ItemGroup>
              <Menu.Item key="setting:3">订单详情</Menu.Item>
              <Menu.Item key="setting:4">修改密码</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            退出
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
    </>
  )
  
}

export default Title;