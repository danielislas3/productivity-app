import React, { useContext } from 'react';
import { TaskContext } from '../helpers/TaskContext';
import { TaskListItem } from './TaskListItem';

export const TasksList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const handleDone = taskId => {
    dispatch({
      type: 'done',
      payload: taskId,
    });
  };
  const handleDelete = taskId => {
    const action = {
      type: 'delete',
      payload: taskId,
    };
    dispatch(action);
  };
  const handleStart = taskId => {

    dispatch({
      type: 'start',
      payload: taskId,
    });
  };
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((todo, i) => (
          <TaskListItem
            key={todo.id}
            task={todo}
            index={i}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleStart={handleStart}
            tasks={tasks}
          />
        ))
      ) : (
        <span>No tienes Tareas</span>
      )}
    </ul>
  );
};
