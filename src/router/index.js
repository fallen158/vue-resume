import Vue from 'vue'
import Router from 'vue-router'
import Singin from '@/components/Singin'
import Singup from '@/components/Singup'
import Automtic from '@/components/Automtic'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main: Resume
      }
    },
    {
      path: '/singin',
      name: 'singin',
      components:{
        main:Singin
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
      path: '/automtic',
      name: 'automtic',
      components:{
        main: Automtic
      }
    }
  ]
})
