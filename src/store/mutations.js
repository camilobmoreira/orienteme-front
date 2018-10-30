import { initialState } from './state'

export default {
  SET_CURRENT_USER(state, user) {
    state.user = user
  },
  RESET_USER(state) {
    Object.assign(state, initialState().user)
  }
}
