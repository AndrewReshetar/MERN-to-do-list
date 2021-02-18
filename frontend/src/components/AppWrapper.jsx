import React, { useState, useEffect } from 'react';
import { getAllTasks, createTask } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import one from '../img/one.jpg';
import Loader from './Loader';
import Alert from './Alert';
import Task from './Task';

function AppWrapper() {
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.allTasks);
  let { error, loading, tasks, results } = allTasks;
  tasks = tasks || [];
  const [newTask, setNewTask] = useState('');
  const [radioFilter, setRadioFilter] = useState('all');
  const [radioSortByDate, setRadioSortByDate] = useState('newest');
  useEffect(() => {
    dispatch(getAllTasks(radioFilter, radioSortByDate));
  }, [dispatch, radioFilter, radioSortByDate]);

  const createTaskHandler = (e) => {
    e.preventDefault();
    if (newTask === "") {
      return false;
    } else {
      dispatch(createTask(newTask));
      setNewTask('');
      setTimeout(function () {
        dispatch(getAllTasks(radioFilter, radioSortByDate));
      }, 200);
    }
  }

  return (
    <Wrapper>
      <ImgBlock>
        <div className="background">
          {results ? <h1>{results}</h1> : null}
        </div>
        <img src={one} alt="background" />
      </ImgBlock>
      <ContentBlock>
        <FilterPanel>
          <div>
            <ul>
              <li>
                <input type="radio" id="all" name="filter" value="all" checked={radioFilter === 'all'} onChange={(e) => setRadioFilter(e.target.value)} />
                <label htmlFor="all">all</label> |
              </li>
              <li>
                <input type="radio" id="completed" name="filter" value="completed" checked={radioFilter === 'completed'} onChange={(e) => setRadioFilter(e.target.value)} />
                <label htmlFor="completed">completed</label>  |
              </li>
              <li>
                <input type="radio" id="uncompleted" name="filter" value="uncompleted" checked={radioFilter === 'uncompleted'} onChange={(e) => setRadioFilter(e.target.value)} />
                <label htmlFor="uncompleted">uncompleted</label>
              </li>

            </ul>
          </div>
          <div>
            <ul>
              <li>
                <input type="radio" id="newest" name="sortByDate" value="newest" checked={radioSortByDate === 'newest'} onChange={(e) => setRadioSortByDate(e.target.value)} />
                <label htmlFor="newest">newest</label> |
              </li>
              <li>
                <input type="radio" id="latest" name="sortByDate" value="latest" checked={radioSortByDate === 'latest'} onChange={(e) => setRadioSortByDate(e.target.value)} />
                <label htmlFor="latest">latest</label>
              </li>
            </ul>
          </div>
        </FilterPanel>
        <AddTask>
          <form>
            <h1>Change my life</h1>
            <input type="text" placeholder="What is your focus today?" value={newTask.toLowerCase()} onChange={(e) => setNewTask(e.target.value)} />
            <button type="submit" onClick={createTaskHandler} style={{ border: 'none' }}>
              <i className="fas fa-angle-right"></i>
            </button>
          </form>
        </AddTask>
        <TasksPanel>
          {loading ? <Loader /> : error ? <Alert>{error}</Alert> : (
            tasks.map(t => <Task key={t._id} task={t} radioFilter={radioFilter} radioSortByDate={radioSortByDate} />)
          )}
        </TasksPanel>
      </ContentBlock>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  min-height: 60vh;
  margin: 8vh 0;
  box-shadow: 5px 5px 5px 10px rgba(0,0,0,0.2);

  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width:98vw;
    min-height: 50vh;
  }

  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width:98vw;
    margin:8vh 0;
  }
`
const ImgBlock = styled.div`
  width: 35vw;
  position:relative;
  img{
    width: 100%;
    height:100%;
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h1{
      color: rgb(122,95,96);
      font-size: 6rem;
    }
  }

  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50vw;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`
const ContentBlock = styled.div`
  width: 65vw;
  background-color: rgb(57,57,57);
  display:flex;
  flex-direction: column;

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50vw;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width: 98vw;
  }
`

const FilterPanel = styled.div`
  align-self: flex-end;
  width:60%;
  display: flex;
  justify-content: space-evenly;
  color: #8f8e8e;
  padding: 1% 2%;
  height: 12vh;
  ul {
    list-style: none;
    display: flex;
  }
  input {
    display:none;
  }
  label {
    cursor: pointer;
    padding: 0 3px;
  }
  input:checked + label {
    color: rgb(190,159,100);
  }
  
  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    width:100%;
    font-size: 1.3rem;
    padding: 2% 2%;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width:100%;
    padding: 1% 0;
    align-self: center;
    height: 8vh;
  }
`
const AddTask = styled.div`
  position:relative;
  margin-bottom:5%;
  h1{
    color:rgb(190,159,100);
    padding-left:10%;
    margin-bottom: 5vh;
    font-size:3rem;
    font-weight: lighter;
  }
  input{
    width: 60%;
    margin-left:10%;
    padding-bottom: 2vh;
    background-color: transparent;
    outline: none;
    border:none;
    color: #afaeae;
    border-bottom: 1px solid #777777;
    font-size: 1.1rem;
    &:focus{
      font-size: 1.1rem;
      outline: none;
      border:none;
      color: #afaeae;
      font-weight: normal;
    }
  }
  button i{
    position:absolute;
    bottom: 10px;
    right: 220px;
    color: rgb(190,159,100);
    font-size: 1.3rem;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover{
      color: white;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom:15%;
    h1{
      padding-left:5%;
    }
    input{
      width: 88%;
      margin-left:5%;
      padding-bottom: 1vh;
    }
    button i {
      bottom: 15px;
      right: 50px;
      font-size: 1.1rem;
    }
  }

  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom:5%;
    h1{
      padding-left:4%;
      font-size: 2.3rem;
    }
    input{
      width: 90%;
      margin-left:3%;
      padding-left:2%;
      padding-bottom: 1vh;
    }
    button i {
      bottom: 15px;
      right: 30px;
      font-size: 1.1rem;
    }
  }
`

const TasksPanel = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 45vh;
 //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 32vh;
    justify-content: flex-start;
  }
 //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    min-height: 30vh;
  }
`

export default AppWrapper
