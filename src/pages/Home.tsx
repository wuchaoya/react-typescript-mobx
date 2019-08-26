import React,{useEffect} from 'react';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';
import Nav from '../components/Nav';
import Modali, { useModali } from '../components/Modal';
import GlobalStore from '../stores/GlobalStore';
import HomeStore from '../stores/HomeStore';
import apiListProxy from '../Proxys/apiListProxy';
import Group from '../components/Group';
import Device from '../components/Device';
import BroadcastFlow from '../components/BroadcastFlow';

interface PropsType {
  GlobalStore: GlobalStore,
  HomeStore: HomeStore
}

const Home: React.FC<PropsType> = inject('GlobalStore','HomeStore') (observer(props => {
  
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
  });
  
  const [playModal, togglePlayModal] = useModali({
    animated: true,
  });
  
  const {HomeStore, GlobalStore} = props
  
  const onClickUpLoad = async () => {
    await HomeStore.getGameList()
    toggleCompleteModal()
  }
  
  const devicePlay = async (activeData: any) => {
    await HomeStore.devicePlay(activeData.id)
    togglePlayModal()
  }
  
  useEffect(() => {
    (async() => await HomeStore.getGroupList())()
  },[HomeStore])
  
  return (
    <>
      <Nav/>
      <Group onChange={(v) => HomeStore.selectGroup(Number(v))} dataSource={mobx.toJS(HomeStore.groupList).map(apiListProxy)} />
      <Device onClick={devicePlay} dataSource={mobx.toJS(HomeStore.deviceList).map(apiListProxy)} />
      <button onClick={onClickUpLoad}>
        上传、管理文件
      </button>
      <Modali.Modal {...completeModal}>
        <Modali.File dataSource={mobx.toJS(HomeStore.gameList).map(apiListProxy)} />
      </Modali.Modal>
    <Modali.Modal {...playModal}>
      <BroadcastFlow devicePlayInfo={GlobalStore.devicePlayInfo} />
    </Modali.Modal>
    </>
  )
  
}))

export default Home;
