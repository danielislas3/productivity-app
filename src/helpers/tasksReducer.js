export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter(task => task.id !== action.payload);
    case 'toggle':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    case 'start':
      return state.map(task =>
        task.id === action.payload ? { ...task, current: !task.current } : task
      );

    default:
      return state;
  }
};
