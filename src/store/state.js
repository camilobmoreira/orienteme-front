export function initialState() {
  return {
    user: {
      _id: '',
      fullName: '',
      email: '',
      userName: '',
      created_at: ''
    },
    toast: {
      show: false,
      color: '',
      time: 0,
      message: ''
    }
  }
}

const state = initialState()

export default state
