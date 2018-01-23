import Landing from '@/components/layouts/Landing'
import Dashboard from '@/components/layouts/Dashboard'

import Home from '@/components/Home'
import Login from '@/components/Login'

import Tasks from '@/components/Tasks'

const routes = [
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '',
        component: Home,
        name: 'landing'
      },
      {
        path: 'login',
        alias: '',
        component: Login,
        name: 'login'
      }
    ]
  },
  {
    path: '/dash',
    alias: '',
    name: 'authed',
    component: Dashboard,
    children: [
      {
        path: 'tasks',
        alias: '',
        component: Tasks,
        name: 'tasks'
      }
    ]
  }
];

export default routes
