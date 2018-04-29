import {QUERYCHANNEL, STOREHISTORY} from '../types'
const home = {
  state: {
    channellist: [],
    visitedhistory: []
  },
  mutations: {
    [QUERYCHANNEL] (state, data) {
      state.channellist = data
    },
    [STOREHISTORY] (state, data) {
      state.visitedhistory = data
    }

  },
  actions: {
    querychannel ({commit, state}, data) {
      commit(QUERYCHANNEL, data)
    }
  }
}
export default home
