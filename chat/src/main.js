// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
import { getAllMessages } from './store/actions'

// false关闭vue启动时产生的提示音
// Vue.config.productionTip = false
Vue.config.debug = true

Vue.filter('time', timestamp => {
    return new Date(timestamp).toLocaleTimeString()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    store,
    template: '<App/>',
    components: { App }
})

getAllMessages(store)