import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Singup from '@/components/Singup'
import Automtic from '@/components/Automtic'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components:{
        main: Resume
      }
    },
    {
      path: '/login',
      name: 'login',
      components:{
        main:Login
      }
    },
    {
      path: '/singup',
      name: 'singup',
      components:{
        main:Singup
      }
    },
    {
      path: '/Automtic',
      name: 'automtic',
      components:{
        main: Automtic
      }
    }
  ]
})
