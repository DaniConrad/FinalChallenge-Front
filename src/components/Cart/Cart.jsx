import React, { useContext, useEffect ,useState} from 'react'
import {  useNavigate, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsFillTrashFill, } from 'react-icons/bs'
import '../../App.css'
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { getCart, getImgs, removeItem } from '../../services/routes';
import { useResponsive } from '../../hooks/useResponsive';

export const Cart = () => {

    const { user } = useContext(UserContext) 
    const { responsive, checkViewport } = useResponsive()
    const [ cart, SetCart ] = useState([])
    const [reloadData, setReloadData] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }

    useEffect(() => {
      checkViewport(770)
    }, [checkViewport])

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
                <div className='d-flex justify-content-center 'key={item.id}>
                   <div className={`personal-bg-cart d-flex justify-content-center px-2 my-2 flex-wrap ${responsive ? 'flex-column px-5' : ''}`}>
                     <div className='d-flex justify-content-center'>
                       <img src={getImgs() + item.img} alt={item.name} className="cart-img"/>
                     </div>
                         <div className={`d-flex align-items-center flex-wrap ${responsive ? 'flex-column' : ''}`}>
                           <h4 className='text-light m-2 text-center' style={{width: '10rem'}}>{item.name}</h4>
                          <div className='d-flex'>
                           <p className='text-light m-2 text-center' style={{width: '6rem'}}>Cantidad: {item.prodQuantity}</p>
                           </div>
                          <p className='text-light m-2 text-center' style={{width: '7rem'}}>Precio: $ {item.price}</p>
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
                </div>
              ))
           }
            <div className='d-flex'>
               <Link to='/checkout'><button className='btn btn-buy-cart  text-light mx-2'>
               Terminar mi Compra
                 </button></Link>
              </div>
            <hr className='text-light'/>
          <button className='btn btn-secondary m-3'onClick={handleNavigate}>Volver</button>
   </Container>
  )
}