export const createTaskReducer = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { loading: true }
    case 'CREATE_SUCCESS':
      return { loading: false, ...action.payload }
    case 'CREATE_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}