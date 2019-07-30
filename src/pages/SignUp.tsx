import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import Global from '../stores/Global';
import SignUpStore from '../stores/SignUp';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input,  Button, CodeInput } from '../components';


export interface PropsType {
  Global: Global,
  SignUp: SignUpStore
}

type SignUpProps = PropsType & RouteComponentProps;


@inject('Global', 'SignUp')
@observer
class SignUp extends React.PureComponent<SignUpProps> {
  
  async componentDidMount () {
  
  }
  
  render () {
    const {SignUp} = this.props;
    return (
      <>
      <Title titleNormal title='注册' subtitle='已有账号,立即登录'/>
      <Input value={SignUp.accountInfo.mobile} onChange={(e) => SignUp.setAccountInfo('mobile', e.target.value)} placeholder='请输入手机号'/>
      <CodeInput value={SignUp.accountInfo.code} onChange={(e) => SignUp.setAccountInfo('code', e.target.value)}  phone={SignUp.accountInfo.mobile} />
      <Input value={SignUp.accountInfo.password} onChange={(e) => SignUp.setAccountInfo('password', e.target.value)} type='password' placeholder='请输入密码' />
      <Input value={SignUp.accountInfo.passwordRepeat} onChange={(e) => SignUp.setAccountInfo('passwordRepeat', e.target.value)} type='password' placeholder='请再次输入密码'/>
      <Button onClick={SignUp.checkAccountInfo} type='primary' shape='round' ghost>立即注册</Button>
      </>
    )
  }
  
}


export default View<SignUpProps>(SignUp);
