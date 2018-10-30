import { initialState } from './state'

export default {
  SET_CURRENT_USER(state, user) {
    state.user = user
  },
  RESET_USER(state) {
    Object.assign(state.user, initialState().user)
  },
  SET_TOAST(state, payload) {
    state.toast = {
      show: true,
      color: payload.color || 'success',
      time: payload.time || 2000,
      message: payload.message
    }
  },
  RESET_TOAST(state) {
    Object.assign(state.toast, initialState().toast)
  }
}
