import React, { useContext, useEffect ,useState} from 'react'
import {  useNavigate, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsFillTrashFill, } from 'react-icons/bs'
import '../../App.css'
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { getCart, removeItem } from '../../services/routes';


export const Cart = () => {

    const { user } = useContext(UserContext) 
    
    const [ cart, SetCart ] = useState([])
    const [reloadData, setReloadData] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }

    useEffect(() => {
      getCart(user._id)
        .then((res) => SetCart(res.data))
        .catch(err => console.log(err))
        return ()=> setReloadData(true)
    }, [reloadData])
    

    const deleteItem = (itemID) => {
      removeItem(user._id, itemID)
    };

  return (
    <Container>
         <h2 className='text-light'>Carrito de Compras</h2>
               <hr className='text-light'/>
           {
            cart.map((item) => (
                <div className='d-flex justify-content-center 'key={item._id}>
                    <div className={`personal-bg-cart d-flex justify-content-center px-2 my-2 flex-wrap `}>
                      <div className='d-flex justify-content-center'>
                        <img src={item.img} alt={item.name} className="cart-img"/>
                      </div>
                          <button onClick={()=>deleteItem(item._id)} className='me-2 btn'>
                                <BsFillTrashFill 
                                  size={'2rem'}
                                color={'#A31616'}
                                alt={'Eliminar artículo'}
                                title={'Eliminar artículo'}
                                  />
                          </button> 
                    </div>
                  </div>
              ))
           }
        {/* <h2 className='mb-2 text-light'>Total: $ {totalCart()}</h2> */}
            <div className='d-flex'>
               <Link to='/checkout'><button className='btn btn-buy-cart  text-light mx-2'>
               Terminar mi Compra
                 </button></Link>
               {/* <button onClick={()=>emptyCart()} className='btn btn-empty-cart text-light mx-2'>
                 Vaciar carrito
                  </button> */}
              </div>
            <hr className='text-light'/>
          <button className='btn btn-secondary m-3'onClick={handleNavigate}>Volver</button>
   </Container>
  )
}