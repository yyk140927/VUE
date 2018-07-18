import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// @ alias 路径别名 短路径
// 路由对应组件  页面级组件
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  // RouterLink 如过当前router和path一致
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component:seller
    }
  ]
})
