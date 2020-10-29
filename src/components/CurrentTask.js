import React, { useContext, useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPlay,
  faPause,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../helpers/TaskContext';

export const CurrentTask = () => {
  //traigo todas las tareas dle contexto
  const { tasks, dispatch } = useContext(TaskContext);
  //creo un estado con la tarea actual
  const [currentTask, setCurrentTask] = useState(
    tasks.filter(task => task.current === true)[0]
  );

  //al completar la tarea
  const handleToggle = () => {
    dispatch({
      type: 'toggle',
      payload: currentTask.id,
    });
  };
  //detecta si hay una nueva tarea como principal y la setea al estado
  useEffect(() => {
    setCurrentTask(tasks.filter(task => task.current === true)[0]);
  }, [tasks]);

  return (
    <Jumbotron>
      {!currentTask ? (
        <h1>Selecciona una tarea</h1>
      ) : (
        <>
          <h4>
            <FontAwesomeIcon className='ml-3' icon={faCoffee} />
          </h4>
          <div className='d-flex flex-row justify-content-md-around'>
            <h5>{currentTask.name}</h5>
            <h5>{currentTask.description}</h5>
            <span>1:45:02</span>
            <div>
              <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faPlay} />
              <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faPause} />
              <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faStop} />
            </div>
          </div>
          <p>
            <Button variant='primary' onClick={handleToggle}>
              Terminar
            </Button>
          </p>
        </>
      )}
    </Jumbotron>
  );
};
