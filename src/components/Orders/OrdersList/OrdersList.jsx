import React from 'react'
import {Container} from 'react-bootstrap'
import Orders from '../Orders/Orders'

 const OrdersList = ({orders}) => {


    
  return (
    <div>
      <Container className='d-flex justify-content-center flex-wrap my-3'>
        {orders.map((order) => <Orders order={order} id={order.orderID} key={order.orderID} />)}
      </Container>
    </div>
  )
}

export default OrdersList;