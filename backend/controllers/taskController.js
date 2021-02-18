const APIFeatures = require('../utils/apiFeatures');
const Task = require('../models/taskModel');


const createTask = async (req,res) => {
  try{
    const task = await Task.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        task
      }
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    })
  }  
}

const getAllTasks = async (req,res) => {
  try{
    const features = new APIFeatures(Task.find(), req.query).filter().sort();
    const tasks = await features.query;
    
    res.status(200).json({
      status: 'success',
      results: tasks.length,
      tasks
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    })
  }  
}

const getTask = async (req,res) => {
  try{
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        task
      }
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    })
  }  
}

const updateTask = async (req,res) => {
  try{
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json({
      status: 'success',
      data: {
        updatedTask
      }
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    })
  }  
}

const deleteTask = async (req,res) => {
  try{
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    })
  }  
}

module.exports = {createTask,getAllTasks,getTask,updateTask,deleteTask}