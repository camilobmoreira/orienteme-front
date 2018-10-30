export default {
  setCurrentUser({ commit }, payload) {
    commit('SET_CURRENT_USER', payload)
  },
  resetUser({ commit }) {
    commit('RESET_USER')
  },
  toast({ commit }, payload) {
    commit('SET_TOAST', payload)
  },
  resetToast({ commit }) {
    commit('RESET_TOAST')
  }
}
