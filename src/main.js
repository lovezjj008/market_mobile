// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import '@/config/rem'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/common.less'
import httpServer from '@/config/httpServer'
import App from './App'

Vue.prototype.axios = httpServer
Vue.use(MintUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // `to` 和 `from` 都是路由对象
  if (to.meta && to.meta.rootNav) {
    store.dispatch('selectnave', to.meta.rootNav)
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
