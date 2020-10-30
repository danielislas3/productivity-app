import React, { useContext, useEffect, useState, useRef } from 'react';
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
import Countdown from 'react-countdown';

export const CurrentTask = () => {
  //referencias para controlar el timer
  const refTimer = useRef();

  //traigo todas las tareas dle contexto
  const { tasks, dispatch } = useContext(TaskContext);
  //creo un estado con la tarea actual
  const [currentTask, setCurrentTask] = useState(
    tasks.filter(task => task.current === true)[0]
  );

  //al completar la tarea
  const handleDone = () => {
    dispatch({
      type: 'done',
      payload: currentTask.id,
    });
  };
  //detecta si hay una nueva tarea como principal y la setea al estado
  useEffect(() => {
    setCurrentTask(tasks.filter(task => task.current === true)[0]);
  }, [tasks]);

  const handlePlay = () => {
    refTimer.current.start();
  };

  const handlePause = () => {
    refTimer.current.pause();
  };

  const handleStop = () => {
    refTimer.current.stop();
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    console.log('====================================');
    console.log( hours, minutes, seconds,completed);
    console.log('====================================');
    if (completed) {
      // Render de tarea completada
      handleDone();
      return <h1>Esta tarea ha sido completada</h1>;
    } else {
      // Contador
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

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
              <FontAwesomeIcon
                className='ml-3 cursor-pointer'
                icon={faPlay}
                onClick={handlePlay}
              />
              <FontAwesomeIcon
                className='ml-3 cursor-pointer'
                icon={faPause}
                onClick={() => {
                  handlePause();
                }}
              />

              <FontAwesomeIcon
                className='ml-3 cursor-pointer'
                icon={faStop}
                onClick={handleStop}
              />
            </div>
          </div>
          <p>
            <Button variant='primary' onClick={handleDone}>
              Terminar
            </Button>
          </p>
        </>
      )}
      <Countdown
        date={Date.now() + currentTask.duration}
        renderer={renderer}
        ref={refTimer}
        autoStart={false}
        controlled={false}
      />
    </Jumbotron>
  );
};
