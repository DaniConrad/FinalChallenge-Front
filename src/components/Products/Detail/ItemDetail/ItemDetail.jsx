import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../../../App.css'
import { ItemCount } from '../../ItemCount/ItemCount';
import { UserContext } from '../../../../context/UserContext';
import axios from 'axios';
import { config } from '../../../../config/config';
import { getImgs, postCart } from '../../../../services/routes';

export const ItemDetail = ({productDetail}) => {

    const {name, desc, img, price, stock, _id} = productDetail;
    const { user } = useContext(UserContext) 
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }

    const [quantity, SetQuantity] = useState(1);
    
    const addItemCart = () =>{
        const itemToAdd = { _id, quantity }
        postCart(user._id, itemToAdd)
          .then(function (response) {
            if(response.data._id) navigate('/products')
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div className="detail-container container my-3">
        <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
                <div className="detail-img-container d-flex justify-content-center shadow ">
                    <img src={getImgs() + img} alt={name} title={name} className="detail-img"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="detail-text-container d-flex flex-column align-items-center shadow ">
                    <h2 className="detail-price mt-3 fs-1">
                        $ {price}
                    </h2>
                    <h3 className="detail-title fs-2">
                        {name}
                    </h3>
                    <p className="detail-description mx-3 fs-5">
                        {desc}
                    </p>    
                    {
                        <ItemCount 
                            stock={stock}
                            _id={_id}
                            Quantity={quantity}
                            SetQuantity={SetQuantity}
                            onAdd={addItemCart}
                        />
                    }
                    
                    <p className='mt-1'>Disponible: {stock}</p>
                </div>
            </div>
        </div>
        <button className='btn btn-secondary m-3' onClick={handleNavigate}>Volver</button>
    </div>
  )
}