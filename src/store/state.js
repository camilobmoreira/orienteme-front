export function initialState() {
  return {
    user: {
      _id: '',
      fullName: '',
      email: '',
      userName: '',
      created_at: ''
    }
  }
}

const state = initialState()

export default state
