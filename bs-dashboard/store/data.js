import { API, graphqlOperation } from 'aws-amplify'
import ListBsProjects from '../api/listBsProjects'


export const state = () => ({
    pjData : [],
    pjItem : {}
})

export const mutations = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    getList(state, pjList) {
        state.pjData = pjList
    }
}

export const getters = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    pjData: state => state.pjData
}

export const actions = {
    async findAll ({commit}){
        let data = await API.graphql(graphqlOperation(ListBsProjects))
        commit('getList', data.data.listBsProjects )
    }
  }
