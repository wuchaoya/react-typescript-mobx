/**
 * 标题
 */
import React, {useState} from 'react';
import { Menu, Row,Col } from 'antd';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

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
  
  const [current, setCurrent] = useState('home');
  
  const handleClick = (e: { key: React.SetStateAction<string>; }) => setCurrent(e.key)
  
  return (
    <>
    <Row type="flex" justify="space-between" align="middle">
      <Col span={12}>
        <h1 className={classnames(`${prefixCls}-title`)}>{title}</h1>
      </Col>
      <Col span={12}>
        <Menu inlineIndent={40} className={classnames(prefixCls)} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item className={classnames(`${prefixCls}-menuitem`)} key="home">
            <Link to='home'>设备管理</Link>
          </Menu.Item>
          <Menu.Item className={classnames(`${prefixCls}-menuitem`)} key="buy">
            <Link to='/buy'>购买</Link>
          </Menu.Item>
          <Menu.Item className={classnames(`${prefixCls}-menuitem`)} key="vas">
            增值服务
          </Menu.Item>
          <SubMenu className={classnames(`${prefixCls}-menuitem`)} title='个人中心'>
            <Menu.ItemGroup>
              <Menu.Item key="setting:3">订单详情</Menu.Item>
              <Menu.Item key="setting:4">修改密码</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item className={classnames(`${prefixCls}-menuitem`)} key="alipay">
            退出
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
    </>
  )
  
}

export default Title;