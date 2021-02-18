import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from './Modal';
import { isTaskDone, getAllTasks, deleteTask, isTaskUpdated } from '../actions';
import { useDispatch } from 'react-redux';

function Task({ task, radioFilter, radioSortByDate }) {
  const dispatch = useDispatch();
  const [changeTask, setChangeTask] = useState(task.title);
  const [isOpen, setIsOpen] = useState(false);
  const circleIcon = task.isDone ? "far fa-check-circle" : "far fa-circle";
  const circleColor = task.isDone ? "#28da6c" : "rgb(190,159,100)";
  const textDecoration = task.isDone ? "line-through" : "none";
  const textColor = task.isDone ? "#525252" : "#b4b4b4";

  const doneHandler = (e) => {
    const updateDone = !task.isDone;
    dispatch(isTaskDone(e.target.id, updateDone));
    setTimeout(function () {
      dispatch(getAllTasks(radioFilter, radioSortByDate));
    }, 200);
  }

  const deleteHandler = () => {
    const id = task._id;
    dispatch(deleteTask(id));
    setTimeout(function () {
      dispatch(getAllTasks(radioFilter, radioSortByDate));
    }, 200);
  }

  const updateTitleTask = (e) => {
    e.preventDefault();
    const id = task._id;
    dispatch(isTaskUpdated(id, changeTask))
    setTimeout(function () {
      dispatch(getAllTasks(radioFilter, radioSortByDate));
    }, 200);
  }

  return (
    <TaskStyle>
      <i className={circleIcon} style={{ color: circleColor }}></i><span id={task._id} style={{ textDecoration: textDecoration, color: textColor }} onClick={doneHandler}>{task.title}</span>
      <div className="icons">
        <i className="fas fa-edit" style={{ color: '#c5c330' }} onClick={() => setIsOpen(true)}></i>
        <i className="fas fa-trash-alt" style={{ color: '#c53030' }} onClick={deleteHandler}></i>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <form>
          <input type="text" value={changeTask} onChange={(e) => setChangeTask(e.target.value)} />
          <button type="submit" onClick={updateTitleTask} style={{ border: "none" }}>
            <i className="fas fa-pen"></i>
          </button>
        </form>
      </Modal>
    </TaskStyle>
  )
}

const TaskStyle = styled.div`
  width: 82%;
  display:flex;
  align-items:center;
  position: relative;
  i{
    font-size:0.8rem;
    transition: all 0.5s ease;
  }
  span{
    color: #b4b4b4;
    font-size:1.2rem;
    font-weight: lighter;
    padding-left: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .icons{
    position: absolute;
    right: 10px;
    i{
      font-size:1rem;
      margin: 0 5px;
      cursor: pointer;
      &:hover{
        opacity: 0.6;
      }
    }
  }

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 95%;
    i{
      font-size:1rem;
    }
    span{
      font-size:1.7rem;
      padding: 2% 1%;
    }
    .icons{
      i{
        font-size:1.2rem;
      }
    }
  }

  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width: 98%;
    i{
      font-size:0.8rem;
    }
    span{
      font-size:1.4rem;
      padding: 1% 2%;
    }
    .icons{
      i{
        font-size:1.1rem;
      }
    }
  }
`

export default Task
