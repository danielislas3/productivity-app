import React from 'react';

import Button from 'react-bootstrap/Button';
import { AddTaskModal } from './AddTaskModal';

export const AddTask = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
       Agregar Tarea
      </Button>

      <AddTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
