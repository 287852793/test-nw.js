import HelloWorld from '@/components/HelloWorld'
import TestThree from '@/components/test_three'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TestThree',
      component: TestThree
    }
  ]
})
