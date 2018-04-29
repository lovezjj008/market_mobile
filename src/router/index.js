import Vue from 'vue'
import VueRouter from 'vue-router'
import PageTransition from '@/pages/PageTransition'
import Home from '@/pages/home'
const Goodsclass = r => require.ensure([], () => r(require('@/pages/goodsclass')), 'goodsclass')
const Shopcar = r => require.ensure([], () => r(require('@/pages/shopcar')), 'shopcar')
const Myinfo = r => require.ensure([], () => r(require('@/pages/myinfo')), 'myinfo')
const Search = r => require.ensure([], () => r(require('@/pages/searchpage')), 'search')

VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: PageTransition,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          rootNav: 'home'
        },
        component: Home
      },
      {
        path: '/goodsclass',
        name: 'goodsclass',
        meta: {
          rootNav: 'goodsclass',
          transitionName: 'slide'
        },
        component: Goodsclass
      },
      {
        path: '/shopcar',
        name: 'shopcar',
        meta: {
          rootNav: 'shopcar'
        },
        component: Shopcar
      },
      {
        path: '/myinfo',
        name: 'myinfo',
        meta: {
          rootNav: 'myinfo'
        },
        component: Myinfo
      },
      {
        path: '/search',
        name: 'search',
        meta: {
          transitionName: 'slide'
        },
        component: Search
      }
    ]
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
export default router
