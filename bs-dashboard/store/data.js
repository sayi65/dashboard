import { API, graphqlOperation } from 'aws-amplify'
import ListBsProjects from '../api/listBsProjects'
import CreateBsProjects from '../api/createBsProjects'
import ListUsers from '../api/listUsers'


export const state = () => ({
    pjData : [],
    users : []
})

export const mutations = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    getList(state, pjList) {
        state.pjData = pjList
    },
    getUsers(state, users){
        state.users = users
    }
}

export const getters = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    pjData: state => state.pjData,
    getMenus: state => {
        let result = [];
        state.users.filter((el) => {
            if(!result.includes(el.users)) result.push(el.users)  
        });
        return result
    }
}

export const actions = {
    async findAll ({commit}){
        let data = await API.graphql(graphqlOperation(ListBsProjects))
        commit('getList', data.data.listBsProjects )
    },
    async saveData ({commit}, bsData){
        const response = await API.graphql(graphqlOperation(CreateBsProjects, {createbsprojectinput :bsData}))
    },
    async findMenuList({commit}){
        let users = await API.graphql(graphqlOperation(ListUsers))
        commit('getUsers', users.data.listBsProjects.items )

    }
  }
