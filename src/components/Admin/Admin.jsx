import React from 'react'
import { Container, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <Container className='w-25 my-2 text-center'>
        <ButtonGroup vertical>
            <Button as={Link} to="/uploads" className='border border-dark'>Agregar productos</Button>
            <Button as={Link} to="/adminproducts" className='border border-dark'>Editar o Borrar Productos</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Admin