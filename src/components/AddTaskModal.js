import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useForm } from '../hooks/useForm';

export const AddTaskModal = props => {
  const [
    { name, description, duration, type,hor,min },
    handleInputChange,
    clear,
  ] = useForm({
    name: '',
    description: '',
    duration: '',
    type: '',
    hor:'',
    min:'',
  });
  const [personalTimer, setPersonalTimer] = useState(false);

  //detecta si se utiliza el select para setear el tiempo de la tarea
  useEffect(() => {
    type === 'personal' && setPersonalTimer(true);
  }, [type]);

  const handleCrear = () => {
    console.log('====================================');
    console.log(name, description, duration, type,hor,min );
    console.log('====================================');
    props.onHide();
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
              value={name}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='description'
              className='form-control ml-2'
              placeholder='Descripcion'
              value={description}
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
                  value={hor}
                  onChange={handleInputChange}
                />
                <input
                  type='number'
                  className='form-control ml-2'
                  placeholder='Minutos'
                  min='0'
                  max='59'
                  name='min'
                  value={min}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <select
                name='type'
                className='custom-select'
                value={type}
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
