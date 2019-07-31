import React from 'react';
import { inject, observer } from 'mobx-react';
import Nav from '../components/Nav';
import Modali, { useModali } from '../components/Modal';

interface PropsType {
  name?: string
}

const Home: React.FC<PropsType> = inject('GlobalStore') (observer(props => {
  
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
  });
  return (
    <>
      <Nav/>
      <button onClick={()=>toggleCompleteModal()}>
        上传、管理文件
      </button>
      <Modali.Modal {...completeModal}>
        <Modali.File />
      </Modali.Modal>
    </>
  )
  
}))

export default Home;
