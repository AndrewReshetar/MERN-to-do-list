export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'TASK_REQUEST':
      return { loading: true }
    case 'TASK_SUCCESS':
      return { loading: false, ...action.payload }
    case 'TASK_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}