import Vue from 'vue'
import Router from 'vue-router'
import MyPortfolio from '@/components/MyPortfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPortfolio',
      component: MyPortfolio
    }
  ]
})
