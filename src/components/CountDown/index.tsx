import React from "react";
import { Button, message } from 'antd';
import classnames from 'classnames';
import {TEXT, TIME, RULES, ERROR_CODE} from './config';
import { getvcode } from '../../services/global';
import './style.less';

export interface IndexInterfaceState {
  defaultTip?: string,
  countDownTip?: string,
  isNeedValidatePhone?: boolean,
  phone: string,
  waitTime?: number,
  countDownTime?: number
  getSmsFunc?: any
}

export interface CountDownState {
  pending: boolean,
  disabled: boolean,
  buttonContent: string | undefined,
  buttonDefaultContent?: string | undefined,
  count: number | undefined
}

class CountDown extends React.Component<IndexInterfaceState, CountDownState> {
  
  private countInterval: number;
  
  public static defaultProps = {
    defaultTip: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    buttonDefaultContent: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    buttonContent: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    countDownTip: TEXT.COUNT_DOWN_TIP,
    count: TIME.WAIT_TIME,
    countDownTime: TIME.COUNT_DOWN_TIME
  };
  
  constructor(props: IndexInterfaceState) {
    super(props);
    const {defaultTip, waitTime} = this.props;
    this.state = {
      pending: false,
      disabled: false,
      buttonDefaultContent: defaultTip,
      buttonContent: defaultTip,
      count: waitTime,
    };
  }
  
  public async handleClick() {
    const {pending, disabled} = this.state;
    const {isNeedValidatePhone, phone} = this.props;
    if(pending || disabled) return;
    if(isNeedValidatePhone) {
      if(!this.validatePhone(phone)) return;
    }
    this.setButtonIsPending();
    await this.sendData();
  }
  
  // 校验手机号
  private validatePhone(v: string) {
    if(v.length < 1) {
      message.warning(ERROR_CODE.PHONE_EMPTY);
      return false;
    } else if(!RULES.PHONE.test(v)) {
      message.warning(ERROR_CODE.PHONE_ERROR);
      
      return false;
    } else {
      return true;
    }
  }
  
  // 设置按钮为 pending 状态
  private setButtonIsPending(): void {
    this.setState({
      pending: true,
      buttonContent: TEXT.COUNT_DOWN_PENDING
    })
  }
  
  // 设置按钮为可用状态
  private setButtonIsUsable(): void {
    const {buttonDefaultContent} = this.state;
    this.setState({
      pending: false,
      disabled: false,
      buttonContent: buttonDefaultContent
    })
  }
  
  // 倒计时
  private countDownHandler() {
    const {count} = this.state;
    const {countDownTime, countDownTip} = this.props;
    let newCount: any  = count;
    this.countInterval = setInterval(() => {
      if(newCount <= 0) {
        clearInterval(this.countInterval);
        this.setButtonIsUsable();
        return;
      }
      this.setState({
        pending: false,
        disabled: true,
        buttonContent: `${countDownTip}${newCount}s`
      });
      newCount --;
    },countDownTime)
  }
  
  // 发送请求
  private async sendData() {
    const response = await getvcode ({mobile: this.props.phone, type: 3});
    console.log(response);
    if(response.error) {
      this.setButtonIsUsable();
      return false;
    }
    this.countDownHandler();
  }
  
  
  public render() {
    const {pending, disabled, buttonContent} = this.state;
    const countDownClassNames:any = classnames({
      'gc-countDown': true,
      'pending': pending,
      'disabled': disabled
    });
    return (
    <Button onClick={() => this.handleClick()} className={countDownClassNames} type='link'>
      {buttonContent}
      </Button>
    );
  }
}
export default CountDown;