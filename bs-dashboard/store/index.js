import { API, graphqlOperation } from 'aws-amplify'
import GetPjCount from '../api/getPjCount'

export const state = () => ({
  count: 0
})

export const mutations = {
  // ここでは hogeFromStore の状態（値）を変更する処理を定義
  getCount(state, pjList) {
    state.count = pjList.length
  }
}

export const actions = {
  async getPJCount({ commit }) {
    let data = await API.graphql(graphqlOperation(GetPjCount))
    commit('getCount', data.data.listProjects.items)
  }
}
