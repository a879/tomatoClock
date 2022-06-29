import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import clock from '@/components/clock'
import Header from '@/commons/Header'
import Add from '@/views/AddContent'
import Get from '@/views/GetContent'
import TodoList from '@/components/TodoList'
import A from '@/components/TodoList'

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
      path: '/todolist',
      component: TodoList
    },{
      path: '/a',
      component: A
    }
    
  ]
})
