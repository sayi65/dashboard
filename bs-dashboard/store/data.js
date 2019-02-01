import { API, graphqlOperation } from 'aws-amplify'

const ListBsProjects = `query listBsProjects {
  listBsProjects {
    items {
        agreement
        amount
        classification
        enddate
        kubun
        orders
        pb_classification
        pj_name
        pls
        pms
        sales
        startdate
        supervision
        users
        uuid
    }
  }
}`;


export const state = () => ({
    pjData : []
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
