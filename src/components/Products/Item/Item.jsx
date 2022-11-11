import React from "react";
import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = ({product}) =>{
    

    return(
            <Card style={{ width: '18rem' }} bg="dark" className="d-flex align-items-center m-3">
                <Card.Img style={{ width: '55%', height:'55%' }} variant="top" alt={product.name} src= {`http://127.0.0.1:8080` + product.img} className="mt-4"/>
                <Card.Body>
                    <Card.Title className="text-light text-center">
                        {product.name}
                    </Card.Title>
                    <Container >
                        <Link to={`/detail/${product._id}`} className="d-flex justify-content-center flex-column" style={{width:'10rem'}}>
                            <Button id={product.id}>Ver detalles</Button>
                        </Link>
                        <Card.Text className="d-flex justify-content-center text-light">
                        Stock disponible: {product.stock}
                        </Card.Text>
                    </Container>
                </Card.Body>
            </Card> 
    )}

export default Item;