import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import GlobalStore from '../stores/GlobalStore';
import ResetPasswordStore from '../stores/ResetPasswordStore';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input,  Button, CodeInput } from '../components';


export interface PropsType {
  GlobalStore: GlobalStore,
  ResetPasswordStore: ResetPasswordStore
}

type ResetPasswordProps = PropsType & RouteComponentProps;


@inject('GlobalStore', 'ResetPasswordStore')
@observer
class ResetPassword extends React.PureComponent<ResetPasswordProps> {
  
  async componentDidMount () {
  
  }
  
  render () {
    const {ResetPasswordStore} = this.props;
    return (
      <>
      <Title title='忘记密码' />
      <Input value={ResetPasswordStore.accountInfo.mobile} onChange={(e) => ResetPasswordStore.setAccountInfo('mobile', e.target.value)} placeholder='请输入手机号'/>
      <CodeInput type={2} value={ResetPasswordStore.accountInfo.code} onChange={(e) => ResetPasswordStore.setAccountInfo('code', e.target.value)}  phone={ResetPasswordStore.accountInfo.mobile} />
      <Input value={ResetPasswordStore.accountInfo.password} onChange={(e) => ResetPasswordStore.setAccountInfo('password', e.target.value)} type='password' placeholder='请输入密码' />
      <Input value={ResetPasswordStore.accountInfo.passwordRepeat} onChange={(e) => ResetPasswordStore.setAccountInfo('passwordRepeat', e.target.value)} type='password' placeholder='请再次输入密码'/>
      <Button onClick={ResetPasswordStore.resetPassword} type='primary' shape='round'>确定</Button>
      </>
    )
  }
  
}


export default View<ResetPasswordProps>(ResetPassword);
