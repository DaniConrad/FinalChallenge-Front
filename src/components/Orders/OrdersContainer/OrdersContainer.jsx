import React from 'react'
import { getOrdersByUserID } from '../../../services/routes'
import { UserContext } from '../../../context/UserContext'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import OrdersList from '../OrdersList/OrdersList'

const OrdersContainer = () => {

    const [reloadData, setReloadData] = useState(false)
    const [ orders, SetOrders ] = useState([])
    const { user } = useContext(UserContext) 

    useEffect(() => {
        getOrdersByUserID(user._id, SetOrders)
        return ()=> setReloadData(true)
    }, [reloadData])
    
  return (
    <OrdersList orders={orders}/>
  )
}

export default OrdersContainer