import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useContext } from 'react'
import {UserContext} from '../../context/UserContext'
import { postCheckout } from '../../services/routes'

export const Checkout = () => {

    const { user } = useContext(UserContext)
    const [ orderID, setOrderID ]  = useState('')
    
    postCheckout(user._id)
        .then(res => { 
            setOrderID(res.data._id) 
            return
        })
        .catch(err => console.log(err)) 
        
  return (
    <Container>
        <div className='d-flex justify-content-center'>
            <div className="checkout-order d-flex justify-content-center my-1 shadow-lg" >
                <div className="row">
                    <div className="d-flex flex-column justify-content-center align-items-center col-lg-8 col-md-8 col-12">
                        <h4 className="text-light fs-2">¡Gracias por tu compra!</h4>
                        <h5>Tu número de orden es: {orderID}</h5>
                        <p className="mb-0 text-light fs-5 text-center">Recibirás un email con la confirmación.</p>
                    </div>  
                    <div className="col-lg-4 col-md-4  col-12 d-flex justify-content-center">
                        <img src="https://i.ibb.co/FDj5xxB/3414323.png" className="checkout-order-img" alt='beers'/>
                    </div>
                </div>
            </div>
        </div>
        <Link to='/'><button className='btn btn-secondary my-2'>Volver</button></Link>
    </Container>
  )
}
