import React, { useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Error from '../Alerts/error/LoginError';

 const Login = () => {

    const initialForm = {
        email: '',
        password: '',
    }

    const {handleInputChange, handleValidate, error} = useForm(initialForm)
    
  return (
    <Container className='d-flex align-items-center flex-column'>
        {
            error ? <Error /> : ''
        }
        <Form onSubmit={handleValidate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Ingresa el email" 
                    onChange={handleInputChange}
                    name='username'
                    className='login-form-input'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light'>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Contraseña" 
                    name='password'
                    onChange={handleInputChange}
                    className='login-form-input'
                />
            </Form.Group>
            <Button className='btn-standard' type="submit">
                Ingresar
            </Button>
        </Form>
        <div>
            <Link to='/signup'>¿No tienes una cuenta? Regístrate</Link>
        </div>
    </Container>
    
  )
}

export default Login