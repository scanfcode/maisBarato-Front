import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Registerproduct'
import Listproduct from '@/components/ListProduct'
import Search from '@/components/searchproduct.vue'
import Dash from '@/components/dashCard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: 
        Dash
    },
    {
      path: '/produtos',
      name: 'list',
      component: 
        Listproduct,
        Search,
        Dash
    }
  ]
})
