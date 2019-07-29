import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import Global from '../stores/Global';
import SignInStore from '../stores/SignIn';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input, Toolbar, Button } from '../components';

export interface PropsType {
  Global: Global,
  SignIn: SignInStore
}

type SignInProps = PropsType & RouteComponentProps;


@inject('Global', 'SignIn')
@observer
class SignIn extends React.PureComponent<SignInProps> {
  
  async componentDidMount () {
    this.props.SignIn.init();
  }
  
  render () {
    const {SignIn} = this.props;
    return (
      <>
      <Title center title='爱云兔手机群控平台'/>
      <Input value={SignIn.accountInfo.mobile} onChange={(e) => SignIn.setAccountInfo('mobile', e.target.value)} placeholder='请输入手机号'/>
      <Input value={SignIn.accountInfo.password} onChange={(e) => SignIn.setAccountInfo('password', e.target.value)} type='password' placeholder='请输入密码'/>
      <Toolbar checked={SignIn.remember} onChange={(e)=>SignIn.setRemember(e.target.checked)} />
      <Button onClick={SignIn.checkAccountInfo} type='primary' shape='round'>登录</Button>
      <Button onClick={SignIn.routerPush} type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
}


export default View<SignInProps>(SignIn);
