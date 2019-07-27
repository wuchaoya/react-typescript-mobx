import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import Global from '../stores/Global';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input, Toolbar, Button } from '../components';

export interface PropsType {
  Global: Global,
}

type SignUpProps = PropsType & RouteComponentProps;


@inject('Global')
@observer
class SignUp extends React.PureComponent<SignUpProps> {
  
  async componentDidMount () {
    this.props.Global.setTitle('404')
    await this.props.Global.login()
  }
  
  render () {
    return (
      <>
      <Title title='注册' subtitle='已有账号,立即登录'/>
      <Input placeholder='请输入手机号'/>
      <Input type='password' placeholder='请输入密码'/>
      <Toolbar />
      <Button type='primary' shape='round'>登录</Button>
      <Button type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
  
}


export default View<SignUpProps>(SignUp);
