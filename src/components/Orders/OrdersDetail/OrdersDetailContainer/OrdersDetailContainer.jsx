import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOrdersByID } from '../../../../services/routes'
import OrdersDetailList from '../OrdersDetailList/OrdersDetailList'
import { Container } from 'react-bootstrap'

const OrdersDetailContainer = () => {

  const [ products, setProducts ] = useState([])
  const { orderID } = useParams()

  useEffect(() => {
    getOrdersByID(orderID)
      .then(res => setProducts(res.data.products))
  }, [])


  return (
    <Container className='my-2'>
        {products.map(product => <OrdersDetailList key={product._id} product={product} />)}
    </Container>
  )
}

export default OrdersDetailContainer