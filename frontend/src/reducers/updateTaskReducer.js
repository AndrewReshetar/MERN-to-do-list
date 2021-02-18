export const updateTaskReducer = (state=false, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { loading: true }
    case 'UPDATE_SUCCESS':
      return { loading: false, ...action.payload }
    case 'UPDATE_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}