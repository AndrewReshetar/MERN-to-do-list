export const isDoneReducer = (state=false, action) => {
  switch (action.type) {
    case 'DONE_REQUEST':
      return { loading: true }
    case 'DONE_SUCCESS':
      return { loading: false, ...action.payload }
    case 'DONE_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}