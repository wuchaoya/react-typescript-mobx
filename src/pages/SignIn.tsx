import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import GlobalStore from '../stores/GlobalStore';
import SignInStore from '../stores/SignInStore';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input, Toolbar, Button } from '../components';

export interface PropsType {
  GlobalStore: GlobalStore,
  SignInStore: SignInStore
}

type SignInProps = PropsType & RouteComponentProps;


@inject('GlobalStore', 'SignInStore')
@observer
class SignIn extends React.PureComponent<SignInProps> {
  
  async componentDidMount () {
    this.props.SignInStore.init();
  }
  
  render () {
    const {SignInStore} = this.props;
    return (
      <>
      <Title center title='爱云兔手机群控平台'/>
      <Input value={SignInStore.accountInfo.mobile} onChange={(e) => SignInStore.setAccountInfo('mobile', e.target.value)} placeholder='请输入手机号'/>
      <Input value={SignInStore.accountInfo.password} onChange={(e) => SignInStore.setAccountInfo('password', e.target.value)} type='password' placeholder='请输入密码'/>
      <Toolbar checked={SignInStore.remember} onChange={(e)=>SignInStore.setRemember(e.target.checked)} />
      <Button onClick={SignInStore.checkAccountInfo} type='primary' shape='round'>登录</Button>
      <Button onClick={SignInStore.routerPush} type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
}


export default View<SignInProps>(SignIn);
