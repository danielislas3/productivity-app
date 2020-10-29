import React from 'react';
import Badge from 'react-bootstrap/Badge';

export const TaskListItem = ({task,handleDelete,handleDone, handleStart, index,}) => {
  return (
    <li key={task.id} className='list-group-item list-group-flush'>
      {task.done && (
        <Badge className='float-right' variant='success'>
          Success
        </Badge>
      )}

      <p
        className={`${task.done && 'complete'}`}
        onClick={() => handleDone(task.id)}>
        {index + 1}.-{task.name} <br />
        {task.description}
      </p>
      <button
        onClick={() => {
          handleDelete(task.id);
        }}
        className='btn btn-danger'>
        Borrar
      </button>
      <button
        onClick={() => {
          handleStart(task.id);
        }}
        className='btn btn-primary'>
        {task.current ? 'Parar' : 'Iniciar'}
      </button>
    </li>
  );
};
