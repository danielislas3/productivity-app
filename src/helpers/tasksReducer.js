import moment from 'moment';
moment().format();

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter(task => task.id !== action.payload);
    case 'done':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: true } : task
      );
    case 'start':
      return state.map(task =>
        task.id === action.payload ? { ...task, current: !task.current } : task
      );
    case 'update':
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              duration: moment(0)
                .add(action.payload.minutes, 'minutes')
                .add(action.payload.hours, 'hours')
                .add(action.payload.seconds, 'seconds')
                .valueOf(),
            }
          : task
      );

    default:
      return state;
  }
};
