import React from 'react'
import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { getProducts } from '../../../services/routes'
import AdminListProducts from './AdminListProducts'
import ModifyForm from './ModifyForm/ModifyForm'

const Modify = () => {

  const [products, setProducts] = useState([])
  const [productID, setProductID] = useState()

  getProducts()
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

    const getProductID = (prodID) => {
      setProductID(prodID)
    }

  return (
    <Container>
      <Form.Select aria-label="Default select example" onChange={e => getProductID(e.target.value)} className="my-2">
        <option>Selecciona un producto</option>
        {
           products.map(product => <AdminListProducts product={product} key={product._id}/>)
        }
      </Form.Select>
      {productID ? <ModifyForm prodID={productID}/> : ''}
    </Container>
    
  )
}

export default Modify