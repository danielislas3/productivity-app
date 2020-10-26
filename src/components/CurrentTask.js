import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPlay,
  faPause,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
export const CurrentTask = () => {
  return (
    <Jumbotron>
      <h4>
        CurrentTask
        <FontAwesomeIcon className='ml-3' icon={faCoffee} />
      </h4>
      <div className='d-flex flex-row justify-content-md-around'>
        <h5>Tarea</h5>
        <span>1:45:02</span>
        <div>
          <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faPlay} />
          <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faPause} />
          <FontAwesomeIcon className='ml-3 cursor-pointer' icon={faStop} />
        </div>
      </div>
      <p>
        <Button variant='primary'>Terminar</Button>
      </p>
    </Jumbotron>
  );
};
