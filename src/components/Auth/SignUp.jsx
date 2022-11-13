import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Form, Button, Container } from 'react-bootstrap'
import SignUpError from '../error/SignUpError'
import { useState } from 'react'
import { postSignUp } from '../../services/routes'
import { viewSuccessAlert } from '../Alerts/Success'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()

    const initialForm = {
        email: '',
        password: '',
    }  

    const [error, setError] = useState(false)
    const {handleInputChange, values, setValues} = useForm(initialForm)

    const handleValidate = (e) =>{
        e.preventDefault()
        
        const newUser = {
            username: values.username,
            password: values.password,
            name: values.name,
            phone: values.phone
          }

        postSignUp(newUser)
          .then(response => {
            if(response.data.userID) {
                viewSuccessAlert()
                navigate('/auth')
            }
          })
          .catch(function (error) {
            if(!error.response.data.user) setError(true)
          });

      }


  return (
    <Container className='d-flex align-items-center flex-column'>
        {
            error ? <SignUpError /> : ''
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingresa tu Nombre" 
                    onChange={handleInputChange}
                    name='name'
                    className='login-form-input'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Teléfono</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Ingresa tu teléfono" 
                    onChange={handleInputChange}
                    name='phone'
                    className='login-form-input'
                />
            </Form.Group>
            <Button className='btn-standard' type="submit">
                Registrarse
            </Button>
        </Form>
    </Container>
  )
}

export default SignUp
