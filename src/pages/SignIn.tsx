import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import Global from '../stores/Global';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input, Toolbar, Button } from '../components';

export interface PropsType {
  Global: Global,
  SignIn: any
}

type SignInProps = PropsType & RouteComponentProps;


@inject('Global', 'SignIn')
@observer
class SignIn extends React.PureComponent<SignInProps> {
  
  async componentDidMount () {
    this.props.Global.setTitle('404')
    await this.props.Global.login()
    console.log(this);
  }
  
  render () {
    return (
      <>
      <Title title='爱云兔手机群控平台'/>
      <Input placeholder='请输入手机号'/>
      <Input type='password' placeholder='请输入密码'/>
      <Toolbar />
      <Button type='primary' shape='round'>登录</Button>
      <Button onClick={this.props.SignIn.routerPush} type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
}


export default View<SignInProps>(SignIn);
