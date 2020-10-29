import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { NavBar } from './NavBar';
import { taskReducer } from '../helpers/tasksReducer';
import { TaskContext } from '../helpers/TaskContext';
import { TasksList } from './TasksList';
import { CurrentTask } from './CurrentTask';

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};

export const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const context = {
    tasks,
    dispatch,
  };
  return (
    <TaskContext.Provider value={context}>
      <div className='container mt-4'>
        <h1>Aplicación de productividad</h1>
        <NavBar />
        <CurrentTask/>
        <TasksList />
      </div>
    </TaskContext.Provider>
  );
};
