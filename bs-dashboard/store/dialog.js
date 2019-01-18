export const state = () => ({
    item : {}
})

export const mutations = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    showItem(state, listItem) {
        state.open = listItem
    }
}

export const actions = {
    async showItem(context){
        context.commit(showItem)
    }
}

export const getters = {
    item: state => state.item // 各コンポーネントのウォッチャで監視するので
  }