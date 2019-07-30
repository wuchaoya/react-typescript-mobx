import React from 'react';
import View from '../components/View';
import { inject, observer } from 'mobx-react';
import Global from '../stores/Global';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Input,  Button, CodeInput } from '../components';


export interface PropsType {
  Global: Global,
}

type ResetPasswordProps = PropsType & RouteComponentProps;


@inject('Global')
@observer
class ResetPassword extends React.PureComponent<ResetPasswordProps> {
  
  async componentDidMount () {
  
  }
  
  render () {
    return (
      <>
      <Title title='忘记密码' />
      <Input placeholder='请输入手机号'/>
      <CodeInput phone='' />
      <Input type='password' placeholder='请输入密码' />
      <Input type='password' placeholder='请再次输入密码'/>
      <Button type='primary' shape='round'>确定</Button>
      </>
    )
  }
  
}


export default View<ResetPasswordProps>(ResetPassword);
