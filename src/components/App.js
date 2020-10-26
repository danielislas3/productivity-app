import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CurrentTask } from './CurrentTask';
import '../index.css';
export const App = () => {
  return (
    <div className='container mt-4'>
      <h1>Aplicación de productividad</h1>
      <CurrentTask />
    </div>
  );
};
