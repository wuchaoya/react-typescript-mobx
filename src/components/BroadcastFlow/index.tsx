/**
 * 设备
 */
import React,{useEffect}  from 'react';
import {SelectProps} from 'antd/lib/select';
import './style.less';

export interface PropsType {
  className?: string;
  prefixCls?: string;
  devicePlayInfo?: any
}


const BroadcastFlow: React.FC<PropsType & SelectProps> = props => {
  
  const {devicePlayInfo} = props;
  
  const onSceneChanged = (sceneId: any, extraInfo: any) => {
    console.log(sceneId, extraInfo)
  }
  
  useEffect(() => {
    console.log(devicePlayInfo);
    const Cloudplay:any = (window as any).Cloudplay;
    new Cloudplay({
      accessKeyId: devicePlayInfo.appId,
      masterId: devicePlayInfo.cid,
      slaveIds:  [{
        phoneId: devicePlayInfo.cid,
        domId: devicePlayInfo.cid
      }],
      userInfo: {userId: '123', userToken: 'abc'},
      packageName: devicePlayInfo.packageName,
      cap: '0.50',
      token: devicePlayInfo.accessToken,
      onSceneChanged: onSceneChanged
    });
  },[devicePlayInfo])
  
  const { prefixCls = 'gc-broadcast-flow' } = props;
  return (
    <>
    <div className={prefixCls} id={devicePlayInfo.cid} />
    </>
  )
  
}

export default BroadcastFlow;