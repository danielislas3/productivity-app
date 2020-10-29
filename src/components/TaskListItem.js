import React from 'react';

export const TaskListItem = ({ task, handleDelete, handleToggle, handleStart,index }) => {
  return (
    
    <li key={task.id} className='list-group-item list-group-flush'>
      <p
        className={`${task.done && 'complete'}`}
        onClick={() => handleToggle(task.id)}>
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
        {task.current?'Parar':'Iniciar'}
      </button>
    </li>
  );
};
