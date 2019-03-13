export const state = () => ({
  open: false
})

export const mutations = {
  // ここでは hogeFromStore の状態（値）を変更する処理を定義
  toggleModal(state) {
    state.open = !state.open
  }
}

export const getters = {
  open: state => state.open // 各コンポーネントのウォッチャで監視するので
}
