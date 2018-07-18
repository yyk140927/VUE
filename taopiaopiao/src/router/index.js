import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import MovieDetail from '@/views/MovieDetail'
import Cinema from '@/views/Cinema'
import CinemaDetail from '@/views/CinemaDetail'
import Me from '@/views/Me'
import NoData from '@/views/NoData'
// import App from '@/App'
import NotFound from '@/components/404'
import LazyLoad from '@/components/lazyload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      component : Home
    },{
      path : '/mv',
      component : Home
    },{
      path : '/movie/detail/:id',
      name: 'detail',
      component : MovieDetail
    },{
      path : '/cinema',
      component : Cinema
    },{
      path : '/cinema/detail/:id',
      name: 'cdetail',
      component: CinemaDetail
    },{
      path : '/me',
      component : Me
    },{
      path : '/no',
      component : NoData
    },{
      path : '*',
      component : NotFound
    }
  ]
})
