import React, { useContext } from 'react';
import { TaskContext } from '../helpers/TaskContext';
import { TaskListItem } from './TaskListItem';

export const TasksList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const handleToggle = taskId => {
    dispatch({
      type: 'toggle',
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
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((todo, i) => (
          <TaskListItem
            key={todo.id}
            task={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      ) : (
        <span>No tienes Tareas</span>
      )}
    </ul>
  );
};
