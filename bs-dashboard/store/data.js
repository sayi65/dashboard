import { API, graphqlOperation } from 'aws-amplify'
import ListBsProjects from '../api/listBsProjects'
import CreateBsProjects from '../api/createBsProjects'
import ListUsers from '../api/listUsers'


export const state = () => ({
    pjData : [],
    menuUsers : []
})

export const mutations = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    getList(state, pjList) {
        state.pjData = pjList
    },
    getMenuData(state, users){
        state.menuUsers = users
    }
}

export const getters = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    pjData: state => state.pjData,
    getUserData: state => {
        let result = [];
        state.menuUsers.filter((el) => {
            if(!result.includes(el.users)) result.push(el.users)  
        });
        return result
    },
    getPjData: state => {
        let pjresult = [];
        state.menuUsers.filter((el) => {
            if(!pjresult.includes(el.pj_name)) pjresult.push(el.pj_name)  
        });
        return pjresult
    },
    getSalesData: state => {
        let salesResult = [];
        state.menuUsers.filter((el) => {
            if(!salesResult.includes(el.sales)) salesResult.push(el.sales)  
        });
        return salesResult
    },
    getPMData: state => {
        let pmResult = [];
        state.menuUsers.filter((el) => {
            if(!pmResult.includes(el.pms)) pmResult.push(el.pms)  
        });
        return pmResult
    },
    getPLData: state => {
        let plResult = [];
        state.menuUsers.filter((el) => {
            if(!plResult.includes(el.pls)) plResult.push(el.pls)  
        });
        return plResult
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
        commit('getMenuData', users.data.listBsProjects.items )

    }
  }
