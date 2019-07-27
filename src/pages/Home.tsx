import React from 'react';
import { inject, observer } from 'mobx-react';

interface PropsType {
  name?: string
}

const Home: React.FC<PropsType> = inject('Global') (observer(props => {
  const {name = '首页'} = props;
  return (
    <div>
      {name}
    </div>
  )
  
}))

export default Home;
