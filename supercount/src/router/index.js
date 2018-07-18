import Vue from 'vue'
import Router from 'vue-router'
import Options from '@/components/Options'
import Area from '@/components/around/Area'
import Online from '@/components/around/Online'
import QrCode from '@/components/around/QrCode'
import LineSuccess from '@/components/around/LineSuccess'
import Branche from '@/components/around/Branche'
import IDCard from '@/components/around/IDCard'
import LineNo from '@/components/around/LineNo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Options',
      component: Options
    },{
      path: '/Area',
      name: 'Area',
      component: Area
    },{
      path: "/Branche",
      name: 'Branche',
      component: Branche
    },{
      path: '/Online',
      name: 'Online',
      component: Online
    },{
      path: "/IDCard",
      name: 'IDCard',
      component: IDCard
    },{
      path: "/QrCode",
      name: 'QrCode',
      component: QrCode
    },{
      path: "/LineSuccess",
      name: 'LineSuccess',
      component: LineSuccess
    },{
      path: "/LineNo",
      name: 'LineNo',
      component: LineNo
    }
  ]
})
