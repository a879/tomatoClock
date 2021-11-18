import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import clock from '@/components/clock'
import Header from '@/commons/Header'
import Login from '@/views/Login'
import Add from '@/views/AddContent'
import Get from '@/views/GetContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/clock',
      name: 'Clock',
      component: clock
    },{
      path: '/header',
      name: 'Header',
      component: Header
    },{
      path: '/add',
      name: 'Add',
      component: Add
    },{
      path: '/get',
      name: 'Get',
      component: Get
    },{
      path: '/start',
      name: 'Start',
      component: () => import(
        '@/components/Start'
      )
    },{
      path: '/title_item',
      name: 'title',
      component: () => import(
        '@/components/TitleItem'
      )
    },{
      path: '/d',
      name: 'd',
      component: () => import(
        '@/views/D'
      )
    },{
      path: '/dt',
      name: 'dt',
      component: () => import(
        '@/views/Dt'
      )
    }
    
  ]
})
