import React from 'react'
import { Container, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <Container className='w-25 my-2'>
        <ButtonGroup vertical>
            <Button as={Link} to="/uploads" className='border border-dark'>Agregar productos</Button>
            <Button as={Link} to="/adminproducts" className='border border-dark'>Ver Productos</Button>
            <Button as={Link} to="/modify" className='border border-dark'>Modificar productos</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Admin