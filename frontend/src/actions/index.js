import axios from 'axios';

export const getAllTasks = (filter,sorting) => async (dispatch) => {
  const filterUrl = filter === "all" ? '' : filter === "completed" ? "/?isDone=true" : filter === "uncompleted" ? "/?isDone=false" : '';
  let sortUrl = sorting === "newest" ? '' : sorting === "latest" ? "sort=createdAt" : '';
  
  if(sortUrl){
    if (filterUrl) {
      sortUrl = "&sort=createdAt"
    } else{
      sortUrl = "?sort=createdAt"
    }
  } else{
    sortUrl = ''
  }

  try {
    dispatch({
      type: 'TASK_REQUEST'
    })
    const { data } = await axios.get(`/api/tasks/${filterUrl}${sortUrl}`);

    dispatch({
      type: 'TASK_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'TASK_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const isTaskDone = (id, result) => async (dispatch) => {
  try {
    dispatch({
      type: 'DONE_REQUEST'
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.patch(`/api/tasks/${id}`, {isDone: result}, config);
    dispatch({
      type: 'DONE_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'DONE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const isTaskUpdated = (id, result) => async (dispatch) => {
  try {
    dispatch({
      type: 'UPDATE_REQUEST'
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.patch(`/api/tasks/${id}`, {title: result}, config);
    dispatch({
      type: 'UPDATE_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'UPDATE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createTask = (result) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_REQUEST'
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post(`/api/tasks`, {title: result}, config);
    dispatch({
      type: 'CREATE_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'CREATE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'DELETE_REQUEST'
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.delete(`/api/tasks/${id}`, config);
    dispatch({
      type: 'DELETE_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'DELETE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}