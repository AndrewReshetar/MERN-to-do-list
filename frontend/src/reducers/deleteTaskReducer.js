export const deleteTaskReducer = (state=false, action) => {
  switch (action.type) {
    case 'DELETE_REQUEST':
      return { loading: true }
    case 'DELETE_SUCCESS':
      return { loading: false, ...action.payload }
    case 'DELETE_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}