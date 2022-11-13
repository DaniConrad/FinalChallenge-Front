import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { postProducts } from '../../../services/routes';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Uploads = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({})
  const [file, setFile] = useState() 
  const { user } = useContext(UserContext)

  const handleInputChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFileChange = (e) =>{
    setFile(e.target.files[0])
  }


  const handleValidate = (e) =>{
    e.preventDefault()
    const fd = new FormData();
    fd.append('prodImg', file);
    let AXIOSconfig = {
      headers:{'Content-Type':'multipart/form-data'}
    }
    postProducts(user._id, values, fd, AXIOSconfig)
      .then(res => { if (res.data === true) navigate('/products') })
      .catch(err => console.log(err))
  }

      

  return (
    <div>
        <Container>
            <Form onSubmit={handleValidate} className= "m-3">
                <Form.Group  className="mb-1">
                  <Form.Control 
                      type="text" 
                      placeholder="Ingresa el nombre del producto." 
                      onChange={handleInputChange}
                      name='name'
                      className='login-form-input'
                  />
                </Form.Group>

                <Form.Group   className="mb-1">
                  <Form.Control 
                      type="file" 
                      name='prodImg'
                      onChange={handleFileChange}
                      className='login-form-input'
                  />
                </Form.Group>

                <Form.Group  className="mb-1">
                  <Form.Control 
                      type="text" 
                      placeholder="Ingresa la descripción corta del producto." 
                      onChange={handleInputChange}
                      name='desc'
                      className='login-form-input'
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Control 
                      type="text" 
                      placeholder="Ingresa el precio." 
                      onChange={handleInputChange}
                      name='price'
                      className='login-form-input'
                  />
                </Form.Group>

                <Form.Group   className="mb-1">
                  <Form.Control 
                      type="text" 
                      placeholder="Ingresa el stock." 
                      onChange={handleInputChange}
                      name='stock'
                      className='login-form-input'
                  />
                </Form.Group>

                <Form.Group   className="mb-1">
                  <Form.Control 
                      type="text" 
                      placeholder="Ingresa el código." 
                      onChange={handleInputChange}
                      name='code'
                      className='login-form-input'
                  />
                </Form.Group>
              <Button className='btn-standard' type="submit">
                  Ingresar
              </Button>
            </Form>
        </Container>
        
    </div>
  )
}
