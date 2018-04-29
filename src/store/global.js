import store from 'store'
const SELECTNAV = 'SELECTNAV'
const GETCATEGORYLIST = 'GETCATEGORYLIST'

const global = {
  state: {
    footernav_select: store.get('navstatus') || 'home',
    categoryList: []
  },
  mutations: {
    [SELECTNAV] (state, status) {
      state.footernav_select = status
      store.set('navstatus', status)
    },
    [GETCATEGORYLIST] (state, data) {
      state.categoryList = data
    }
  },
  actions: {
    selectnave ({commit, state}, status) {
      commit(SELECTNAV, status)
    },
    getcategory ({ commit, state }, data) {
      commit(GETCATEGORYLIST, data)
    }
  }
}

export default global
