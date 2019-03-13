import { API, graphqlOperation } from 'aws-amplify'
import CateList from '../api/listPjStatus'

export const state = () => ({
  pjData: []
})

export const mutations = {
  // ここでは hogeFromStore の状態（値）を変更する処理を定義
  getStatusList(state, statusList) {
    state.pjData = statusList
  }
}

export const getters = {
  getPjData: state => {
    let result = []
    state.pjData.filter(el => {
      result.push(el.projects.items[0])
    })
    console.log(result)
    return result
  }
}

export const actions = {
  async findCateList({ commit }) {
    let cateList = await API.graphql(graphqlOperation(CateList))
    commit('getStatusList', cateList.data.listStatuses.items)
  }
}
