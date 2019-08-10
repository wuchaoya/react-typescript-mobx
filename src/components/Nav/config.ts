export interface routerType {
  path: string;
  routes?: any[];
  icon?: string;
  name: string
}

export const routes: routerType[] = [
  {
    path: '/home',
    name: '设备管理'
  },
  {
    path: '/',
    name: '购买'
  },
  {
    path: '/Order',
    name: '个人中心'
  },
  {
    path: '/t',
    name: '退出'
  },
]