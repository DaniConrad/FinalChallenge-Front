import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios'
import { useState } from 'react';
import { postProducts } from '../../../services/routes';
export const Uploads = () => {

  const [values, setValues] = useState({})
  const [file, setFile] = useState() 

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
    postProducts(values, fd, AXIOSconfig)
      .then(function(response) {
      if(response.data.code == '200') {
        
      }
    }).catch(function(error) {
      console.log(error);
    })
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
