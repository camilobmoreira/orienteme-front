export default {
  setCurrentUser({ commit }, payload) {
    commit('SET_CURRENT_USER', payload)
  },
  resetUser({ commit }) {
    commit('RESET_USER')
  }
}
