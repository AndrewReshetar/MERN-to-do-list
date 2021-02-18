const express = require('express');
const router = express.Router();
const {capitalize} = require('../middlewares/capitalize');
const {createTask,getAllTasks,getTask,updateTask,deleteTask} = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(capitalize,createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;