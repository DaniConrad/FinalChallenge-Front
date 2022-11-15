import React, { useState } from 'react'
import { useEffect } from 'react'
import { editProduct, getProductDetail } from '../../../../services/routes'
import { Form, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'
import DeleteProduct from '../../DeleteProduct/DeleteProduct'

const ModifyForm = ({prodID}) => {

    const [product, setProduct] = useState({})
    const [values, setValues] = useState({})
    const { user } = useContext(UserContext)


    const handleInputChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
      }

    const updatedProduct = {
        name: values.name || product.name,
        desc: values.desc || product.desc,
        price: values.price || product.price,
        stock: values.stock || product.stock,
        code: values.code || product.code,
        img: product.img
    }

    const handleValidate = (e) =>{
        e.preventDefault() 
        editProduct(user._id, prodID, updatedProduct)
    }

    useEffect(() => {
        getProductDetail(prodID)
        .then(res => setProduct(res.data))
        .catch(e => console.log(e))
    }, [prodID])
    
  return (
      
            <Form onSubmit={handleValidate} className= "m-3">
              <h5>Para cambiar la imagen deberás borrar y volver a cargar el producto.</h5>
                <Form.Group  className="mb-1">
                  <Form.Label className='mx-2'>Nombre</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder={product.name}
                      onChange={handleInputChange}
                      name='name'
                      className='login-form-input'
                      defaultValue={product.name}
                  />
                </Form.Group>
                <Form.Group  className="mb-1">
                  <Form.Label className='mx-2'>Descripción</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder={product.desc}
                      onChange={handleInputChange}
                      name='desc'
                      className='login-form-input'
                      defaultValue={product.desc}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label className='mx-2'>Precio</Form.Label>
                  <Form.Control 
                      type="Number" 
                      placeholder={product.price} 
                      onChange={handleInputChange}
                      name='price'
                      className='login-form-input'
                      defaultValue={product.price}
                  />
                </Form.Group>

                <Form.Group   className="mb-1">
                  <Form.Label className='mx-2'>Stock</Form.Label>
                  <Form.Control 
                      type="Number" 
                      placeholder={product.stock} 
                      onChange={handleInputChange}
                      name='stock'
                      className='login-form-input'
                      defaultValue={product.stock}
                  />
                </Form.Group>

                <Form.Group   className="mb-1">
                  <Form.Label className='mx-2'>Código</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder={product.code}  
                      onChange={handleInputChange}
                      name='code'
                      className='login-form-input'
                      defaultValue={product.code}
                  />
                </Form.Group>
                <div className='d-flex justify-content-between my-2'>
                  <Button className='btn-standard' type="submit">
                  Enviar
                  </Button>
                  <DeleteProduct prodID={prodID}/>
                </div>
              
            </Form>
  )
}

export default ModifyForm