import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useForm } from '../hooks/useForm';
import { TaskContext } from '../helpers/TaskContext';

export const AddTaskModal = props => {
  const { tasks,dispatch } = useContext(TaskContext);
  console.log(tasks);

  const [newTask, handleInputChange, clear] = useForm({
    id: new Date().getTime(),
    name: '',
    description: '',
    duration: '',
    type: '',
    done:false,
    hor: '',
    min: '',
  });
  const handleAddTask = newTask => {
    dispatch({
      type: 'add',
      payload: newTask,
    });
  };
  const [personalTimer, setPersonalTimer] = useState(false);

  //detecta si se utiliza el select para setear el tiempo de la tarea
  useEffect(() => {
    newTask.type === 'personal' && setPersonalTimer(true);
  }, [newTask.type]);

  //   useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);
  
  const handleCrear = () => {
    props.onHide();
    handleAddTask(newTask);

    clear();
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Agrega una nueva tarea
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Row className='input-group mb-3'>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Nombre'
              value={newTask.name}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='description'
              className='form-control ml-2'
              placeholder='Descripcion'
              value={newTask.description}
              onChange={handleInputChange}
            />
          </Row>
          <Row className='input-group mb-3'>
            {personalTimer ? (
              <>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Horas'
                  min='0'
                  max='2'
                  name='hor'
                  value={newTask.hor}
                  onChange={handleInputChange}
                />
                <input
                  type='number'
                  className='form-control ml-2'
                  placeholder='Minutos'
                  min='0'
                  max='59'
                  name='min'
                  value={newTask.min}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <select
                name='type'
                className='custom-select'
                value={newTask.type}
                onChange={handleInputChange}>
                <option value='DEFAULT'>Duración...</option>
                <option value='corta'>Corta</option>
                <option value='media'>Media</option>
                <option value='larga'>Larga</option>
                <option value='personal'>Personalizada</option>
              </select>
            )}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant='success' onClick={handleCrear}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
