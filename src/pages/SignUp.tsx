import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import GlobalStore from '../stores/GlobalStore';
import SignUpStore from '../stores/SignUpStore';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input,  Button, CodeInput } from '../components';


export interface PropsType {
  GlobalStore: GlobalStore,
  SignUpStore: SignUpStore
}

type SignUpProps = PropsType & RouteComponentProps;


@inject('GlobalStore', 'SignUpStore')
@observer
class SignUp extends React.PureComponent<SignUpProps> {
  
  async componentDidMount () {
  
  }
  
  render () {
    const {SignUpStore} = this.props;
    return (
      <>
      <Title titleNormal title='注册' subtitle='已有账号,立即登录'/>
      <Input value={SignUpStore.accountInfo.mobile} onChange={(e) => SignUpStore.setAccountInfo('mobile', e.target.value)} placeholder='请输入手机号'/>
      <CodeInput type={3} value={SignUpStore.accountInfo.code} onChange={(e) => SignUpStore.setAccountInfo('code', e.target.value)}  phone={SignUpStore.accountInfo.mobile} />
      <Input value={SignUpStore.accountInfo.password} onChange={(e) => SignUpStore.setAccountInfo('password', e.target.value)} type='password' placeholder='请输入密码' />
      <Input value={SignUpStore.accountInfo.passwordRepeat} onChange={(e) => SignUpStore.setAccountInfo('passwordRepeat', e.target.value)} type='password' placeholder='请再次输入密码'/>
      <Button onClick={SignUpStore.checkAccountInfo} type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
  
}


export default View<SignUpProps>(SignUp);
