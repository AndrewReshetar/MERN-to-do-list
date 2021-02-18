import {combineReducers} from 'redux';
import {tasksReducer} from './getAllTasks';
import {isDoneReducer} from './isDoneReducer';
import {deleteTaskReducer} from './deleteTaskReducer';
import {createTaskReducer} from './createTaskReducer';
import {updateTaskReducer} from './updateTaskReducer';

export const rootReducer = combineReducers({
  allTasks: tasksReducer,
  isTaskDone: isDoneReducer,
  deletedTask: deleteTaskReducer,
  createdTask: createTaskReducer,
  updatedTask: updateTaskReducer
})