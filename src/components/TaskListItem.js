import React from 'react';
import Badge from 'react-bootstrap/Badge';

export const TaskListItem = ({
  task,
  tasks,
  handleDelete,
  handleDone,
  handleStart,
  index,
}) => {
  const handleToggle = taskId => {
    const currentTask = tasks.filter(task => task.current === true)[0];
    //setea la tarea current actual como false
    currentTask && handleStart(currentTask.id);
    //setea lanueva  tarea seleccionada  current
    handleStart(taskId);
  };
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
          handleToggle(task.id);
        }}
        className='btn btn-primary'>
        {task.current ? 'Parar' : 'Iniciar'}
      </button>
    </li>
  );
};
