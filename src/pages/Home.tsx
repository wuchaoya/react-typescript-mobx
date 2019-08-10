import React from 'react';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';
import Nav from '../components/Nav';
import Modali, { useModali } from '../components/Modal';
import GlobalStore from '../stores/GlobalStore';
import HomeStore from '../stores/HomeStore';
import apiListProxy from '../Proxys/apiListProxy';

interface PropsType {
  GlobalStore: GlobalStore,
  HomeStore: HomeStore
}

const Home: React.FC<PropsType> = inject('GlobalStore','HomeStore') (observer(props => {
  
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
  });
  
  const {HomeStore} = props
  
  const onClickUpLoad = async () => {
    await HomeStore.getGameList()
    toggleCompleteModal()
  }
  
  return (
    <>
      <Nav/>
      <button onClick={onClickUpLoad}>
        上传、管理文件
      </button>
      <Modali.Modal {...completeModal}>
        <Modali.File dataSource={mobx.toJS(HomeStore.gameList).map(apiListProxy)} />
      </Modali.Modal>
    </>
  )
  
}))

export default Home;
