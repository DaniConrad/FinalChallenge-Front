import React from 'react'
import Card from 'react-bootstrap/Card';
import { getImgs } from '../../../../services/routes';

const OrdersDetailList = ({product}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={getImgs() + product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> Precio : ${product.price} </Card.Text>
        <Card.Text> Descripción: {product.desc} </Card.Text>
        <Card.Text> Cantidad: {product.prodQuantity} </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default OrdersDetailList