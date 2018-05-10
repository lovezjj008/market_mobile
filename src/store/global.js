import store from 'store'
const SELECTNAV = 'SELECTNAV'
const GETCATEGORYLIST = 'GETCATEGORYLIST'
const CHANGEMARK = 'CHANGEMARK'

const global = {
  state: {
    footernav_select: store.get('navstatus') || 'home',
    categoryList: [],
    markShow: false
  },
  mutations: {
    [SELECTNAV] (state, status) {
      state.footernav_select = status
      store.set('navstatus', status)
    },
    [GETCATEGORYLIST] (state, data) {
      state.categoryList = data
    },
    [CHANGEMARK] (state, data) {
      state.markShow = data
    }
  },
  actions: {
    selectnave ({commit, state}, status) {
      commit(SELECTNAV, status)
    },
    getcategory ({ commit, state }, data) {
      commit(GETCATEGORYLIST, data)
    },
    markchange ({ commit, state }, data) {
      commit(CHANGEMARK, data)
    }
  }
}

export default global
