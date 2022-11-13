import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { getProducts } from '../../../services/routes'
import AdminListProducts from './AdminListProducts'

const Modify = () => {

  const [products, setProducts] = useState([])

  getProducts()
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

  return (
    <Container>
      {
        products.map(product => <AdminListProducts product={product} key={product._id}/>)
      }
    </Container>
    
  )
}

export default Modify